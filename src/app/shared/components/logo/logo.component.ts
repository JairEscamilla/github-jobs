import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  
  installEvent = null;

  constructor() { }

  

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    // console.log(event);
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser() {
    if (this.installEvent) {
      this.installEvent.prompt();
      this.installEvent.userChoice.then((response) => {
        console.log(response);
      })
    }
  }

  ngOnInit(): void {
  }

}
