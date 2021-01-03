import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../core/services/jobs.service';
import { Observable } from 'rxjs';
import { Job } from '../../../models/job.model';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  job$: Observable<Job>;    
  job: Job;
  jobId: string;
  loading: boolean = true;

  constructor(
    private jobService: JobsService,
    private route: ActivatedRoute,
  ) { 
    this.route.params.subscribe((params: Params) => {
      this.jobId = params.id;
    });
  }

  ngOnInit(): void {
    
   
    this.jobService.getJob(this.jobId).subscribe(job => {
      this.job = job;
      this.loading = false;
    })

    // this.job$ = this.route.params.pipe(
    //   switchMap((params: Params) => {
    //     return this.jobService.getJob(params.id);
    //   })
    // )

  }


}
