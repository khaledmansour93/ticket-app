import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppComponent } from './app.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketSalesComponent } from './ticket-sales/ticket-sales.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketDetailsComponent,
    TicketSalesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
