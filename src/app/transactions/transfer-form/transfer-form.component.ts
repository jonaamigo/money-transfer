import { NumericPositiveValidator, NumericValidator } from './../../shared/validators/numeric-validator';
import { TransactionsService } from './../transactions.service';
import { FormControl, Form, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup;

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      accountFrom: new FormControl('', [Validators.required]),
      accountTo: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, NumericValidator.numeric, NumericValidator.positive])
    });
  }

  onClickSubmit() {
    const transfer = new Transfer();
    transfer.accountFrom = this.accountsFrom[this.form.get('accountFrom').value].text;
    transfer.accountTo = this.accountsTo[this.form.get('accountTo').value].text;
    transfer.amount = Number(this.form.get('amount').value);
    transfer.date = new Date();
    this.transactionsService.addTransfer(transfer);
  }
}
