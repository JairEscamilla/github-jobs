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
  loading: boolean = true;

  constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((response) => {
      this.jobs = response;
      this.loading = false;
    }, (error) => {
      console.log("Something went wrong):");
      console.log(error);
    })
  }

}
