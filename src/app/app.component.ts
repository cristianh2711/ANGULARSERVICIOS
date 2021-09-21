import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isExpanded = false;

  progresbar = false;
  // tslint:disable-next-line: typedef
  loadData() {
    this.progresbar = true;
    setTimeout(() => {
      this.progresbar = false;
    }, 700);
  }
  ngOnInit(): void {
  }
}