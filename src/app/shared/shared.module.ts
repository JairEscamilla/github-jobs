import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { SanitizePipe } from './pipes/sanitize.pipe';



@NgModule({
  declarations: [
    LogoComponent,
    FooterComponent,
    SanitizePipe,
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    LogoComponent,
    FooterComponent,
    SanitizePipe
  ]
})
export class SharedModule { }
