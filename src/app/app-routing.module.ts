import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule),
    data: {animation: 'isLeft'}
  },
  {
    path:'about',
    loadChildren: () => import('./pages/about/about.module')
      .then(m => m.AboutModule),
    data: {animation: 'isRight'}
  },
  {
    path:'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module')
      .then(m => m.ContactsModule),
    data: {animation: 'isLeft'}
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module')
      .then(m => m.NotFoundModule),
    data: {animation: 'isRight'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
