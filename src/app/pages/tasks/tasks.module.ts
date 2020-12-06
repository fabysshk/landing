import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [TasksComponent, TaskComponent],
  imports: [CommonModule, TasksRoutingModule, ComponentsModule],
})
export class TasksModule {}
