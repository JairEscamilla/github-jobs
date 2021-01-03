import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @Input() job: Job;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirectToDescription(){
    this.router.navigate([`/description/${this.job.id}`]);
  }

}
