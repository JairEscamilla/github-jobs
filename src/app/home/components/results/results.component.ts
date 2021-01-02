import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { JobsService } from '../../../core/services/jobs.service';
import { PageEvent } from '@angular/material/paginator';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  fullTime: boolean = false;
  jobs: Job[] = [];
  currentPageJobs: Job[] = [];
  loading: boolean = true;


  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 20];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(){
    this.jobsService.getJobs().subscribe((response) => {
      this.jobs = response;
      this.length = this.jobs.length;
      this.sliceJobs(0, 10);
    }, (error) => {
      console.log("Something went wrong):");
      console.log(error);
    })
  }

  sliceJobs(pageIndex: number, pageSize: number){
    if(pageIndex === 0)
      this.currentPageJobs = this.jobs.slice(pageIndex, pageIndex + pageSize);
    else 
      this.currentPageJobs = this.jobs.slice(pageIndex + pageSize - 1, pageIndex + 2*pageSize - 1);
    this.loading = false;
  }

  public pageChange(pageEvent: PageEvent): PageEvent{
    this.loading = true;
    this.sliceJobs(pageEvent.pageIndex, pageEvent.pageSize);
    window.scroll({
      top: 550,
      left: 0,
      behavior: 'smooth',
    });

    return pageEvent;

  }

}
