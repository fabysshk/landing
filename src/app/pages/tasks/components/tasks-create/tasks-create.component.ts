import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-tasks-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: ['./tasks-create.component.css'],
})
export class TasksCreateComponent implements OnInit {
  @Input() projectId: string;
  public description: string;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
  public onAdd(): void {
    this.taskService.createTask(this.projectId, this.description);
  }
}
