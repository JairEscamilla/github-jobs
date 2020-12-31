import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { JobsService } from '../../../core/services/jobs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  fullTime: boolean = false;
  jobs: Job[] = [];

  constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((response) => {
      this.jobs = response;
    }, (error) => {
      console.log("Ha ocurrido un error");
      console.log(error);
    })
  }

}
