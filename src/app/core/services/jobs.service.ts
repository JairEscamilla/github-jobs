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

  jobsObs$ = this.jobsObs.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getJobs(){
    this.http.get<Job[]>(`${environment.api}`).pipe( // Aplico un pipe para capturar errores en caso de haberlos
      catchError(error => {
        return throwError('Ups, something went wrong):'); // Lanzo el error
      })
    ).subscribe((response) => { // Me suscribo a la respuesta del Observable de la consulta get
      this.jobs = response; 
      
      this.jobsObs.next(this.jobs); // Emito el arreglo de trabajos
    }), (error) => { // Callback en caso de tener un error
      console.log("Something went wrong):");
      console.log(error);
    };
  }

}
