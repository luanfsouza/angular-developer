import { IndexComponent } from './pages/index/index.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  {
    path: 'portifolio',
    component: PortifolioComponent,
    children: [
      {
        path: ':id',
        pathMatch: 'full',
        component: PortifolioComponent,
      },
      { path: ':id/:token', pathMatch: 'full', component: PortifolioComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
