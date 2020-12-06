import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'user-account',
        pathMatch: 'full',
      },
      {
        path: 'user-account',
        data: { animation: 'isRight' },
        loadChildren: () =>
          import('../user-account/user-account.module').then(
            (m) => m.UserAccountModule
          ),
      },
      {
        path: 'projects',
        data: { animation: 'isLeft' },
        loadChildren: () =>
          import('../projects/projects.module').then((m) => m.ProjectsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
