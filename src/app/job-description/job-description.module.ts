import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobDescriptionRoutingModule } from './job-description-routing.module';
import { DescriptionComponent } from './components/description/description.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    JobDescriptionRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class JobDescriptionModule { }
