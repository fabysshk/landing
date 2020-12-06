import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksCreateComponent } from './tasks-create/tasks-create.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksItemComponent } from './tasks-item/tasks-item.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [TasksCreateComponent, TasksListComponent, TasksItemComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [TasksCreateComponent, TasksListComponent, TasksItemComponent],
})
export class ComponentsModule {}
