import { CommonModule, NgIf } from "@angular/common";

import { Card2Component } from "./card2/card2.component";
import { CardComponent } from "./card/card/card.component";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

NgIf
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, Card2Component, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isAliveCard:boolean = true;
  title = 'diretivas-proj';
}
