import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from 'ng-apexcharts';

export type HistoryChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};

@Component({
  selector: 'app-score-history-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  template: `
    <div class="card shadow-sm h-100">
      <div class="card-body">
        <apx-chart
          *ngIf="chartOptions"
          [series]="chartOptions.series!"
          [chart]="chartOptions.chart!"
          [dataLabels]="chartOptions.dataLabels!"
          [plotOptions]="chartOptions.plotOptions!"
          [xaxis]="chartOptions.xaxis!"
          [yaxis]="chartOptions.yaxis!"
          [stroke]="chartOptions.stroke!"
          [title]="chartOptions.title!"
          [tooltip]="chartOptions.tooltip!"
          [fill]="chartOptions.fill!"
          [legend]="chartOptions.legend!"
        ></apx-chart>
      </div>
    </div>
  `
})
export class ScoreHistoryChartComponent {
  chartOptions: Partial<HistoryChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Code Style & Formatting',
          data: [41, 37, 100, 94, 89]
        },
        {
          name: 'Modularity & Coupling',
          data: [33, 52, 90, 90, 90]
        },
        {
          name: 'Test Coverage & Automation',
          data: [11, 9, 78, 78, 94]
        },
        {
          name: 'CI/CD & Changes',
          data: [5, 8, 6, 88, 98]
        },
        {
          name: 'EOSL & Lifecycle',
          data: [19, 32, 25, 87, 87]
        },
        {
          name: 'Documentation',
          data: [19, 32, 25, 89, 89]
        },
        {
          name: 'Homogenity of Tech Stack',
          data: [19, 32, 25, 75, 75]
        },
        {
          name: 'Architectural Complexity',
          data: [19, 32, 25, 23, 91]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: 'Score History'
      },
      xaxis: {
        categories: [2016, 2017, 2019, 2020, 2021],
        labels: {
          formatter: function(val: any) {
            return val + '';
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        y: {
          formatter: function(val: any) {
            return val + '';
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      },
      dataLabels: {
        enabled: false
      }
    };
  }
}
