import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsService } from './services/jobs.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    JobsService
  ]
})
export class CoreModule { }
