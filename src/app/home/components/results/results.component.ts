import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../core/services/jobs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  fullTime: boolean = false;

  constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe(response => {
      console.log("Here");
      
      console.log(response);
      
    }, error => {
      console.log("Ha ocurrido un error");
      
      console.log(error);
      
    })
  }

}
