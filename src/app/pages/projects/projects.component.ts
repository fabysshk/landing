import { Component, OnInit } from '@angular/core';
import { slider, transformer, fader, stepper } from './route-animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [fader, slider, transformer, stepper],
})
export class ProjectsComponent implements OnInit {
  ngOnInit(): void {}
  // tslint:disable-next-line:typedef
  prepareRoute(outlet: RouterOutlet = null) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
