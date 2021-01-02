import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { JobsService } from '../../../core/services/jobs.service';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  fullTime: boolean = true;
  loading: boolean = false;

  jobs$: Observable<Job[]>;


  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(
    private jobsService: JobsService
  ) { 
    this.getJobs();
  }

  ngOnInit(): void {
  }

  getJobs(){
    this.jobs$ = this.jobsService.jobsObs$;
    this.jobsService.getJobs();
  }

  // sliceJobs(pageIndex: number, pageSize: number){
  //   if(pageIndex === 0)
  //     this.currentPageJobs = this.jobs.slice(pageIndex, pageIndex + pageSize);
  //   else 
  //     this.currentPageJobs = this.jobs.slice(pageIndex + pageSize - 1, pageIndex + 2*pageSize - 1);
    
  //   this.loading = false;
  // }

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

  fullTimeChange(){
  }

}
