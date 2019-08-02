import { TransactionsService } from './../transactions.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Transfer } from 'src/app/shared/model/transfer';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {

  accountsFrom: any[] = [
    { text: 'Account 0', value: 0 },
    { text: 'Account 1', value: 1 },
    { text: 'Account 2', value: 2 }
  ];
  accountsTo: any[] = [
    { text: 'Account to 0', value: 0 },
    { text: 'Account to 1', value: 1 },
    { text: 'Account to 2', value: 2 }
  ];
  accountFrom: number;
  accountTo: number;
  amount: string;

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
  }

  onClickSubmit() {
    const transfer = new Transfer();
    transfer.accountFrom = this.accountsFrom[this.accountFrom].text;
    transfer.accountTo = this.accountsTo[this.accountTo].text;
    transfer.amount = Number(this.amount);
    transfer.date = new Date();
    this.transactionsService.addTransfer(transfer);
  }
}
