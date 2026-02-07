import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from 'ng-apexcharts';
import { Feature } from '../../models/feature.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-current-score-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  template: `
    <div class="card shadow-sm h-100">
      <div class="card-body">
        <apx-chart
          *ngIf="chartOptions"
          [series]="chartOptions.series!"
          [chart]="chartOptions.chart!"
          [xaxis]="chartOptions.xaxis!"
          [title]="chartOptions.title!"
        ></apx-chart>
      </div>
    </div>
  `
})
export class CurrentScoreChartComponent implements OnChanges {
  @Input() features: Feature[] = [];
  chartOptions?: Partial<ChartOptions>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['features'] && this.features && this.features.length > 0) {
      this.initChart();
    }
  }

  private initChart(): void {
    this.chartOptions = {
      series: [{
        name: 'Current Score',
        data: this.features.map(f => f.value)
      }],
      chart: {
        height: 350,
        type: 'radar'
      },
      title: {
        text: 'Current Score'
      },
      xaxis: {
        categories: this.features.map(f => f.name)
      }
    };
  }
}
