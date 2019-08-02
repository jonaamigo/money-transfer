import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from 'src/app/shared/model/transaction';

@Component({
  selector: 'app-transaction-history-item',
  templateUrl: './transaction-history-item.component.html',
  styleUrls: ['./transaction-history-item.component.scss']
})
export class TransactionHistoryItemComponent implements OnInit {

  @Input()
  transaction: Transaction;

  constructor() { }

  ngOnInit() {
  }

}
