import { CardComponent } from './card.component';
import { Routes } from '@angular/router';

export const PRODUC_ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: CardComponent },
];
