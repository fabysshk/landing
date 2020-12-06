import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectService } from 'src/app/service/project.service';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  project$: Observable<any>;
  tasks$: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}
  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    this.route.params.subscribe((r) => {
      this.projectService.getProjectById(r.projectId);
    });
    this.project$ = this.projectService.project$;
    this.tasks$ = this.taskService.tasks$;
  }
}
