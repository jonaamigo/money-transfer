import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {

  transactionTypes = {
    CREDIT_CARD: 'Credit card',
    ONLINE_TRANSFER: 'Online transfer',
  };

  transform(value: any, ...args: any[]): any {
    return this.transactionTypes[value] || value;
  }
}
