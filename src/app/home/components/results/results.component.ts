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

  jobs$: Observable<Job[]>;
  loading$: Observable<boolean>;

  locationModel: string = "";



  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(
    private jobsService: JobsService
  ) { 
    this.loading$ = this.jobsService.loadingObs$;
    this.getJobs();
  }

  ngOnInit(): void {
  }

  getJobs(){
    this.jobs$ = this.jobsService.jobsObs$;
    this.jobsService.getJobs();
  }


  handleLocationChanges(){
    this.jobsService.searchByLocation(this.locationModel, this.fullTime);
    
  }

  // sliceJobs(pageIndex: number, pageSize: number){
  //   if(pageIndex === 0)
  //     this.currentPageJobs = this.jobs.slice(pageIndex, pageIndex + pageSize);
  //   else 
  //     this.currentPageJobs = this.jobs.slice(pageIndex + pageSize - 1, pageIndex + 2*pageSize - 1);
    
  //   this.loading = false;
  // }

  // public pageChange(pageEvent: PageEvent): PageEvent{
  //   this.loading = true;
  //   this.sliceJobs(pageEvent.pageIndex, pageEvent.pageSize);
  //   window.scroll({
  //     top: 550,
  //     left: 0,
  //     behavior: 'smooth',
  //   });

  //   return pageEvent;

  // }


}
