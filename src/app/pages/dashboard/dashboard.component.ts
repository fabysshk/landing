import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, transformer, fader, stepper } from './route-animations';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [fader, slider, transformer, stepper],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // tslint:disable-next-line:typedef
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
