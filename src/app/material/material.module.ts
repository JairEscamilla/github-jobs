import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
