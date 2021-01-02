import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private jobs: Job[] = []; // Declaro un array de elementos que serán los que se van a consultar de la API
  private jobsObs = new BehaviorSubject<Job[]>([]); // Behaviour subject para tener un observable de los trabajos

  private loadingObs = new BehaviorSubject<boolean>(true);

  jobsObs$ = this.jobsObs.asObservable();
  loadingObs$ = this.loadingObs.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getJobs(){
    this.loadingObs.next(true);
    this.http.get<Job[]>(`${environment.api}`).pipe( // Aplico un pipe para capturar errores en caso de haberlos
      catchError(error => {
        return throwError('Ups, something went wrong):'); // Lanzo el error
      })
    ).subscribe(
      (response) => this.setJobs(response), 
      (error) => this.handleError(error)
    );
  }


  searchJobsByKeyWord(search: string){
    this.loadingObs.next(true);
    this.http.get<Job[]>(`${environment.api}search=${search}`).subscribe(
      (response) => this.setJobs(response), 
      (error) => this.handleError(error)
    );
  }

  setJobs(jobs: Job[]){
    this.jobs = jobs;
    this.jobsObs.next(this.jobs);
    this.loadingObs.next(false);
  }

  handleError(error: any){
    console.log("Something went wrong):");
    console.log(error);
  }

}
