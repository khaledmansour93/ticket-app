import { Component } from '@angular/core';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent {
  chartOptions = {
    animationEnabled: true,
    axisX: {
      reversed: true,
      lineColor: "#E5E5EF",
      tickLength: 0,
      labelFontFamily: "Neo Sans Arabic",
      labelFontColor: "#9291A5",
      interval: 1
    },
    axisY: {
      minimum: 0,
      maximum: 255,
      gridColor: "#E5E5EF",
      lineColor: "transparent",
      tickLength: 0,
      labelFontSize: 0,
      interval: 50
    },
    data: [{
      type: "splineArea",
      fillOpacity: 0.26,
      color: "rgba(138, 116, 249, 1)",
      markerSize: 0,
      dataPoints: [
        { label: "يناير", y: 225 },
        { label: "فبراير", y: 100 },
        { label: "مارس", y: 145 },
        { label: "ابريل", y: 190 },
        { label: "مايو", y: 200 },
        { label: "يونيو", y: 230 },
        { label: "يوليو", y: 170 },
        { label: "أغسطس", y: 250 },
        { label: "سبتمبر", y: 151 },
        { label: "اكتوبر", y: 80 },
        { label: "نوفمبر", y: 189 },
        { label: "ديسمبر", y: 140 },
      ]
    }]
  };
}
