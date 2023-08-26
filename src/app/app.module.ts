import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
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
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
