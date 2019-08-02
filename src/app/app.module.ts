import { TransactionsService } from './transactions/transactions.service';
import { TransactionsModule } from './transactions/transactions.module';
import { ComponentsModule } from './shared/common/components.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    TransactionsModule
  ],
  providers: [
    TransactionsService,
    {
      provide: APP_INITIALIZER,
      useFactory: (ts: TransactionsService) => () => ts.init(),
      deps: [TransactionsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
