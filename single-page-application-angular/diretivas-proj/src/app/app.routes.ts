import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'card' },
  {
    path: 'card',
    loadChildren: () =>
      import('./card/card/card-routes').then((r) => r.PRODUC_ROUTES),
  },
  {
    path: 'card2',
    loadComponent: () =>
      import('./card2/card2.component').then((c) => c.Card2Component),
  },
];
 