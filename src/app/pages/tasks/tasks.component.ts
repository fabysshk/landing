import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/service/project.service';
import { slider, transformer, fader, stepper } from './route-animations';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  animations: [fader, slider, transformer, stepper],
})
export class TasksComponent implements OnInit {
  public project$: Observable<any>;
  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.project$ = this.projectService.project$;
    this.route.params.subscribe(({ projectId }) => {
      this.projectService.getProjectById(projectId);
    });
  }
  // tslint:disable-next-line:typedef
  prepareRoute(outlet: RouterOutlet = null) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }
}
