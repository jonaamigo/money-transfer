import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TransactionsService } from './transactions.service';
import { TransactionHistoryItemComponent } from './transaction-history/transaction-history-item/transaction-history-item.component';
import { TransactionTypePipe } from './transaction-type.pipe';
import { TransactionTypeColorPipe } from './transaction-type-color.pipe';

@NgModule({
  declarations: [TransferFormComponent, TransactionHistoryComponent, TransactionHistoryItemComponent, TransactionTypePipe, TransactionTypeColorPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule,
    MatSelectModule, MatInputModule, MatButtonModule
  ],
  exports: [TransactionHistoryComponent, TransferFormComponent],
  providers: [TransactionsService]
})
export class TransactionsModule { }
