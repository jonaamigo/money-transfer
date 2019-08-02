import { TransactionTypes } from './../shared/model/transaction-types';
import { Transfer } from './../shared/model/transfer';
import { Transaction } from './../shared/model/transaction';
import { Injectable } from '@angular/core';

@Injectable()
export class TransactionsService {


  private transactions: Array<Transaction> = [];
  private _filteredTransactions: Array<Transaction> = [];

  orderBy = 'DATE';
  orderByDesc = false;
  filter: string;


  getTransactions(): Array<Transaction> {
    return this.transactions;
  }

  public get filteredTransactions(): Array<Transaction> {
    return this._filteredTransactions;
  }

  constructor() { }

  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
  }

  addTransfer(transfer: Transfer) {
    const transaction: Transaction = new Transaction();
    transaction.amount = transfer.amount;
    transaction.beneficiary = transfer.accountTo;
    transaction.date = transfer.date;
    transaction.type = 'TRANSFER';
    this.addTransaction(transaction);
    this.filterTransactions();
  }

  init() {
    this.transactions.push({
      amount: 100.23,
      beneficiary: 'Tesco',
      date: new Date(2018, 1, 24),
      type: TransactionTypes.CreditCard
    });
    this.transactions.push({
      amount: 23.40,
      beneficiary: 'Lidl',
      date: new Date(2018, 1, 25),
      type: TransactionTypes.CreditCard
    });
    this.transactions.push({
      amount: 23.23,
      beneficiary: 'Lidl',
      date: new Date(2018, 1, 25),
      type: TransactionTypes.Transfer
    });
    this.transactions.push({
      amount: 500.23,
      beneficiary: 'Amazon online store',
      date: new Date(2018, 3, 20),
      type: TransactionTypes.OnlineTransfer
    });
    this.transactions.push({
      amount: 300.54,
      beneficiary: 'eBay',
      date: new Date(2018, 3, 30),
      type: TransactionTypes.Transfer
    });
    this.transactions.push({
      amount: 500.23,
      beneficiary: 'Amazon online store',
      date: new Date(2018, 2, 25),
      type: TransactionTypes.OnlineTransfer
    });
    this.transactions.push({
      amount: 99,
      beneficiary: 'Amadeus',
      date: new Date(2018, 2, 3),
      type: TransactionTypes.CreditCard
    });
    this.transactions.push({
      amount: 99,
      beneficiary: 'Amadeus',
      date: new Date(2018, 4, 27),
      type: TransactionTypes.OnlineTransfer
    });

    this.filterTransactions();
  }

  filterTransactions() {
    let transactions = this.getTransactions().map(x => ({ ...x }));
    if (!!this.filter) {
      transactions = transactions.filter(x => x.beneficiary.toLowerCase().includes(this.filter.toLowerCase()));
    }
    transactions.sort((e1, e2) => this.sortFunction(e1, e2, this.orderBy, this.orderByDesc));

    this._filteredTransactions = transactions;
  }

  sortFunction(e1: Transaction, e2: Transaction, orderBy: string, orderByDesc) {
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

    if (orderByDesc) {
      return comp * -1;
    }
    return comp;
  }

  changeOrderBy(orderBy: string) {
    if (this.orderBy === orderBy) {
      this.orderByDesc = !this.orderByDesc;
    }
    this.orderBy = orderBy;
    this.filterTransactions();
  }

  changeFilter(filter: string) {
    this.filter = filter;
    this.filterTransactions();
  }
}
