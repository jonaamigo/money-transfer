import { TransactionsService } from './../transactions.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/model/transaction';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  myControl = new FormControl();
  options: any[] = [
    { name: 'Mary' },
    { name: 'Shelley' },
    { name: 'Igor' }
  ];
  color: string;
  transactions: Array<Transaction> = [];
  orderBy = 'DATE';
  orderByDesc = false;

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.transactions = this.transactionsService.getTransactions();
  }

  onClickOrderBy(orderBy: string) {
    if (this.orderBy === orderBy) {
      this.orderByDesc = !this.orderByDesc;
    }
    this.orderBy = orderBy;
  }
}
