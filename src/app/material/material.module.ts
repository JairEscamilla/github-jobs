import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatCheckboxModule
  ],
  exports: [
    MatIconModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
