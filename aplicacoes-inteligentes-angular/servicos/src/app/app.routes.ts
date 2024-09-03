import { CardComponent } from './components/card/card.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: CardComponent},
  {path: ':name', pathMatch: 'full', component: PokeCardComponent}
];
