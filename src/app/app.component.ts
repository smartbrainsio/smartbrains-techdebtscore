import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexStroke,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
};

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tech Debt Score';
  data = {};

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @ViewChild("historychart") historychart: ChartComponent;
  public historyChartOptions: Partial<HistoryChartOptions>;

  constructor(private http: HttpClient) {

    this.chartOptions = {
      series: [
        {
          name: "Current Score",
          data: [89, 90, 94, 98, 87, 89, 75, 91]
        }
      ],
      chart: {
        height: 350,
        type: "radar"
      },
      title: {
        text: "Current Score"
      },
      xaxis: {
        categories: [
                     "Code Style & Formatting", 
                     "Modularity & Coupling", 
                     "Test Coverage & Automation", 
                     "CI/CD & Changes", 
                     "EOSL & Lifecycle", 
                     "Documentation",
                     "Homogenity of Tech Stack",
                     "Architectural Complexity"
                    ]
      }
    };

    this.historyChartOptions = {
      series: [
        {
          name: "Code Style & Formatting",
          data: [41, 37, 100, 94, 89]
        },
        {
          name: "Modularity & Coupling",
          data: [33, 52, 90, 90, 90]
        },
        {
          name: "Test Coverage & Automation",
          data: [11, 9, 78, 78, 94]
        },
        {
          name: "CI/CD & Changes",
          data: [5, 8, 6, 88, 98]
        },
        {
          name: "EOSL & Lifecycle",
          data: [19, 32, 25, 87, 87]
        },
        {
          name: "Documentation",
          data: [19, 32, 25, 89, 89]
        },
        {
          name: "Homogenity of Tech Stack",
          data: [19, 32, 25, 75, 75]
        },
        {
          name: "Architectural Complexity",
          data: [19, 32, 25, 23, 91]
        }
      ],
      chart: {
        type: "bar",
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
        colors: ["#fff"]
      },
      title: {
        text: "Score History"
      },
      xaxis: {
        categories: [2016, 2017, 2019, 2020, 2021],
        labels: {
          formatter: function(val) {
            return val + "";
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
          formatter: function(val) {
            return val + "";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };

    http.get('resource').subscribe(data => this.data = data);

  }
}
