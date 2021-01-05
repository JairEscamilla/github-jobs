import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


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


  searchByLocation(location: string = "", fullTime: boolean){
    this.loadingObs.next(true);
    
    this.http.get<Job[]>(`${environment.api}full_time=${fullTime}&location=${location}`).subscribe(
      (response) => {
        this.setJobs(response);
        if(!fullTime){
          this.jobs = this.jobs.filter(job => job.type !== "Full Time");
          this.jobsObs.next(this.jobs);
        }
        
      },
      (error) => this.handleError(error)
    );
  }

  requestServer(url: string){
    this.loadingObs.next(true);
    this.http.get<Job[]>(url)
    .pipe(
      retry(3)
    )
    .subscribe(
      (response) => this.setJobs(response),
      (error) => this.handleError(error)
    );
  }

  getJob(id: string){
    return this.http.get<Job>(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`).pipe(
      retry(3),
      catchError(error => {
        this.handleError(error);
        return throwError(error);
      })
    );
  }


  setJobs(jobs: Job[]){
    this.jobs = jobs;
    this.jobsObs.next(this.jobs);
    this.loadingObs.next(false);
  }

  handleError(error: any){
    this.loadingObs.next(false);
    console.log("Something went wrong):");
    console.log(error);
  }

}
