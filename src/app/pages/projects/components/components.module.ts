import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsItemComponent } from './projects-item/projects-item.component';
import { ProjectsCreateComponent } from './projects-create/projects-create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    ProjectsListComponent,
    ProjectsItemComponent,
    ProjectsCreateComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [
    ProjectsListComponent,
    ProjectsItemComponent,
    ProjectsCreateComponent,
  ],
})
export class ComponentsModule {}
