import { Component, HostListener, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'github-jobs';

  constructor(
    private swUpdate: SwUpdate
  ){
  }

  ngOnInit(){
    this.updatePWA();
  }

  updatePWA(){
    this.swUpdate.available.subscribe(value => {
      console.log("update");
      console.log(value);
      window.location.reload();
    })
  }

}
