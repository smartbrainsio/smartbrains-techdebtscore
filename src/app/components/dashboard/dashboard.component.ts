import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil, finalize } from 'rxjs/operators';
import { Dashboard } from '../../models/dashboard.model';
import { FeatureService } from '../../services/feature.service';
import { CurrentScoreChartComponent } from '../current-score-chart/current-score-chart.component';
import { ScoreHistoryChartComponent } from '../score-history-chart/score-history-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CurrentScoreChartComponent,
    ScoreHistoryChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  dashboard: Dashboard | null = null;
  loading = false;
  error: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(private featureService: FeatureService) {}

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {
    this.loading = true;
    this.error = null;

    this.featureService.getDashboard()
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (data) => {
          this.dashboard = data;
          console.log('Dashboard loaded:', data);
        },
        error: (err) => {
          this.error = err.message;
          console.error('Error loading dashboard:', err);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
