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

@NgModule({
  declarations: [TransferFormComponent, TransactionHistoryComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule, FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatFormFieldModule,
    MatSelectModule, MatInputModule, MatButtonModule
  ],
  exports: [TransactionHistoryComponent, TransferFormComponent]
})
export class TransactionsModule { }
