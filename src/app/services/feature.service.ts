import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Feature } from '../models/feature.model';
import { Dashboard } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private apiUrl = '/feature';

  constructor(private http: HttpClient) {}

  getDashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(`${this.apiUrl}/dashboard`).pipe(
      catchError(this.handleError)
    );
  }

  getAllFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(`${this.apiUrl}/all`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client Error: ${error.error.message}`;
    } else {
      errorMessage = `Server Error: ${error.status} - ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error('Failed to load data. Please try again.'));
  }
}
