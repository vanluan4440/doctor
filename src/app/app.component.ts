import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'doctor';
  hideHeaderFooter: boolean = false;
  constructor(private route: Router, private location: Location) {
    this.route.events.subscribe((event)=>{
      const path = this.location.path().split('/')[
        this.location.path().split('/').length - 1
      ];
      if (path == 'login' || path == 'register') {
        this.hideHeaderFooter = true;

      }

    })

  }

  ngOnInit(): void {


  }
}
