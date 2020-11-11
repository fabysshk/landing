import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {slider, transformer, fader, stepper} from './route-animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fader,
    slider,
    transformer,
    stepper
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
