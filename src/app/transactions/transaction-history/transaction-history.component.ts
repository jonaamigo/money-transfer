import { Transaction } from './../../shared/model/transaction';
import { TransactionsService } from './../transactions.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  myControl = new FormControl();
  color: string;
  transactions: Array<Transaction> = [];
  orderBy = 'DATE';
  orderByDesc = false;
  filter: string;

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.transactions = this.transactionsService.getTransactions();
  }

  onClickOrderBy(orderBy: string) {
    if (this.orderBy === orderBy) {
      this.orderByDesc = !this.orderByDesc;
    }
    this.orderBy = orderBy;
    this.transactions = this.getTransactions();
  }

  getTransactions() {
    let transactions = this.transactionsService.getTransactions().map(x => ({ ...x }));
    if (!!this.filter) {
      transactions = transactions.filter(x => x.beneficiary.toLowerCase().includes(this.filter.toLowerCase()));
    }
    transactions.sort((e1, e2) => this.sortFunction(e1, e2, this.orderBy));
    return transactions;
  }

  sortFunction(e1: Transaction, e2: Transaction, orderBy: string) {
    let comp = 0;
    switch (orderBy) {
      case 'DATE':
        comp = e1.date.getTime() - e2.date.getTime();
        break;
      case 'BENEFICIARY':
        comp = ('' + e1.beneficiary).localeCompare(e2.beneficiary);
        break;
      case 'AMOUNT':
        comp = e1.amount - e2.amount;
        break;
    }

    if (this.orderByDesc) {
      return comp * -1;
    }
    return comp;
  }

  onChangeFilter() {
    this.transactions = this.getTransactions();
  }
}
