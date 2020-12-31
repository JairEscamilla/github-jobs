import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(
    private http: HttpClient
  ) { }

  getJobs(){
    return this.http.get<Job[]>(`${environment.api}`).pipe(
      catchError(error => {
        return throwError('Ups, something went wrong):');
      })
    );
  }

}
