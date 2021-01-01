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
  currentPageJobs: Job[] = [];
  currentPage: number = 0;
  loading: boolean = true;

  constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(){
    this.jobsService.getJobs().subscribe((response) => {
      this.jobs = response;
      this.sliceJobs();
    }, (error) => {
      console.log("Something went wrong):");
      console.log(error);
    })
  }

  sliceJobs(){
    this.currentPageJobs = this.jobs.slice(this.currentPage, this.currentPage + 10);
    this.currentPage = this.currentPage + 10;
    this.loading = false;
  }

}
