import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionTypeColor'
})
export class TransactionTypeColorPipe implements PipeTransform {

  transactionTypes = {
    CREDIT_CARD: 'blue',
    ONLINE_TRANSFER: 'red',
    TRANSFER: 'green'
  };

  transform(value: any, ...args: any[]): any {
    return this.transactionTypes[value];
  }
}
