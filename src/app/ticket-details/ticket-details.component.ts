import { Component, ViewChild } from '@angular/core';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexTooltip, ApexStroke, ApexYAxis, ApexFill, ApexMarkers } from 'ng-apexcharts';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  colors: String[];
  markers: ApexMarkers;
};

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent {
  faArrowCircleUp = faArrowCircleUp;

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [140, 189, 80, 151, 250, 170, 230, 200, 190, 145, 100, 225]
        }
      ],
      chart: {
        height: 250,
        type: "area",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        colors: ["#8A74F9"],
        width: 2
      },
      xaxis: {
        type: "category",
        categories: [
          "ديسمبر",
          "نوفمبر",
          "اكتوبر",
          "سبتمبر",
          "أغسطس",
          "يوليو",
          "يونيو",
          "مايو",
          "ابريل",
          "مارس",
          "فبراير",
          "يناير",
        ],
        labels: {
          style: {
            colors: '#9291A5',
            fontFamily: 'Neo Sans Arabic Medium'
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          stroke: {
            color: "#8A74F9",
            width: 1.5,
            dashArray: 0
          },
          fill: {
            color: "#8A74F9"
          }
        }
      },
      colors: ["#8A74F9"],
      yaxis: {
        show: false
      },
      markers: {
        hover: {
          size: 9
        }
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return '<div class="arrow_box" style="background-color:#1e1b39;padding:9px;color:#e5e5ef">' +
            '<span style="font-family:Inter-Regular;font-size:12px">' + series[seriesIndex][dataPointIndex] +
            '</span>' + '<span style="font-family:Neo Sans Arabic;font-size:12px">' + ' إستخدام' + '</span>' +
            '<br>' + '<span>' + '<img src="../../assets/images/growth-indicator.svg">' +
            '</span>' + '<span style="font-family:Inter;font-size:8px;color:#8a74f9">' + '1.3%' +
            '</span>' +
            '</div>';
        }
      }
    };
  }
}
