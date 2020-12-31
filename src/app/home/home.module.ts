import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from '../material/material.module';
import { ResultsComponent } from './components/results/results.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, SearchComponent, ResultsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeModule { }
