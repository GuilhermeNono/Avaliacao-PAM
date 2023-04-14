import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'homepage',
    loadComponent: () => import('./homepage/homepage.page').then( m => m.HomepagePage)
  },
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
];
