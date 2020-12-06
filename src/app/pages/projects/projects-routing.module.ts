import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: ':projectId',
    component: ProjectComponent,
  },
  {
    path: ':projectId/tasks',
    loadChildren: () =>
      import('../tasks/tasks.module').then((m) => m.TasksModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
