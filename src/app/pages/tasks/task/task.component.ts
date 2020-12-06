import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectService } from 'src/app/service/project.service';
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  public task$: Observable<any>;
  public project$: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private taskService: TaskService
  ) {}
  ngOnInit(): void {
    this.project$ = this.projectService.project$;
    this.task$ = this.taskService.task$;
    this.route.params.subscribe(({ taskId, projectId }) => {
      this.taskService.getTaskById(taskId);
      this.projectService.getProjectById(projectId);
    });
  }
}
