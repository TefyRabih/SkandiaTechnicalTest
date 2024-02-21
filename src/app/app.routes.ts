import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./domains/products/pages/home/home.component').then((c) => c.HomeComponent),
  },
];
