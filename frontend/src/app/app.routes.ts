import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio',
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./presentation/pages/home/home.component').then(
        (c) => c.HomeComponent
      ),
  },
  {
    path: 'tus-productos',
    loadComponent: () =>
      import(
        './presentation/components/products-list/products-list.component'
      ).then((c) => c.ProductsListComponent),
  },
];
