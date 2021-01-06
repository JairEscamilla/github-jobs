import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { JobsService } from '../../../core/services/jobs.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable, Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {

  @ViewChild('paginator', {static: false}) paginator: MatPaginator;

  fullTime: boolean = true;

  jobs$: Observable<Job[]>;
  jobs: Job[] = [];
  jobsSub: Subscription;

  currentPageJobs: Job[] = [];

  loading$: Observable<boolean>;
  loadingSub: Subscription;
  loading: boolean = true;

  locationModel: string = "";

  city: string = "";



  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5];

  // MatPaginator Output
  pageEvent: PageEvent;
  searchField = new FormControl();

  constructor(
    private jobsService: JobsService
  ) { 
    this.loading$ = this.jobsService.loadingObs$;
    this.jobs$ = this.jobsService.jobsObs$;
    this.jobsService.requestServer(environment.api);
    this.searchField.valueChanges.pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.locationModel = value;
      this.handleLocationChanges();
    })
  }

  ngOnInit(): void {
    this.jobsSub = this.jobs$.subscribe((jobs)=> {
      this.jobs = jobs;
      this.length = this.jobs.length;
      this.sliceJobs(0, this.pageSize);
    })

    this.loadingSub = this.loading$.subscribe((result) => {
      this.loading = result;
    })
  }

  ngOnDestroy(){
    this.jobsSub.unsubscribe();
    this.loadingSub.unsubscribe();
  }

  filterByCity(){
    this.jobsService.searchByLocation(this.city, this.fullTime);
  }


  handleLocationChanges(){
    this.jobsService.searchByLocation(this.locationModel, this.fullTime);
  }

  sliceJobs(pageIndex: number, pageSize: number){
    if(pageIndex === 0)
      this.currentPageJobs = this.jobs.slice(pageIndex, pageIndex + pageSize);
    else 
      this.currentPageJobs = this.jobs.slice(pageIndex + pageSize - 1, pageIndex + 2*pageSize - 1);
    try {
      this.paginator.pageIndex = pageIndex;
    } catch (error) { 
    }

    this.loading = false;
  }

  public pageChange(pageEvent: PageEvent): PageEvent{
    this.loading = true;
    this.sliceJobs(pageEvent.pageIndex, pageEvent.pageSize);
    window.scroll({
      top: 200,
      left: 0,
      behavior: 'smooth',
    });

    return pageEvent;
  }
  
}
