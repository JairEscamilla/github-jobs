import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
