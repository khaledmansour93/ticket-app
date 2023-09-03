import { Component } from '@angular/core';
import { faSearch, faSliders, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ticket-sales',
  templateUrl: './ticket-sales.component.html',
  styleUrls: ['./ticket-sales.component.scss']
})
export class TicketSalesComponent {
  faSearch = faSearch;
  faSliders = faSliders;
  faArrowRightArrowLeft = faArrowRightArrowLeft;
}
