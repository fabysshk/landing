import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  public tasks$: Observable<any>;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.tasks$;
  }
}
