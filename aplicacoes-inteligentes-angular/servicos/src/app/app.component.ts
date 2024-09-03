import { CardComponent } from './components/card/card.component';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemComponent } from "./components/item/item.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, ItemComponent],
  template: `<h1>Aula de Services</h1>
  <app-item pokeName="charmander"></app-item>
  <app-item pokeName="dialga"></app-item>
    <router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'servicos';
}
