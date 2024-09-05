import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { Routes } from '@angular/router';
import { SobreComponent } from './pages/sobre/sobre.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'produtos', component: ProdutosComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];
