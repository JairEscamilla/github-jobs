import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [HomeComponent, SearchComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
