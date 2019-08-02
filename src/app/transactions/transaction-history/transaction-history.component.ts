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
  orderBy = 'DATE';
  orderByDesc = false;
  filter: string;


  public get transactions(): Array<Transaction> {
    return this.transactionsService.filteredTransactions;
  }
  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
  }

  onClickOrderBy(orderBy: string) {
    this.orderBy = orderBy;
    this.transactionsService.changeOrderBy(this.orderBy);
  }

  onChangeFilter() {
    this.transactionsService.changeFilter(this.filter);
  }
}
