import { Transfer } from './../shared/model/transfer';
import { Transaction } from './../shared/model/transaction';
import { Injectable } from '@angular/core';

@Injectable()
export class TransactionsService {

  private transactions: Array<Transaction> = [];

  getTransactions(): Array<Transaction> {
    return this.transactions;
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
  }

  init() {
    this.transactions.push({
      amount: 100.23,
      beneficiary: 'Tesco',
      date: new Date(2018, 1, 24),
      type: 'CREDIT_CARD'
    });
    this.transactions.push({
      amount: 23.40,
      beneficiary: 'Lidl',
      date: new Date(2018, 1, 25),
      type: 'CREDIT_CARD'
    });
    this.transactions.push({
      amount: 23.23,
      beneficiary: 'Lidl',
      date: new Date(2018, 1, 25),
      type: 'CREDIT_CARD'
    });
    this.transactions.push({
      amount: 500.23,
      beneficiary: 'Amazon online store',
      date: new Date(2018, 3, 25),
      type: 'ONLINE_TRANSFER'
    });
  }
}
