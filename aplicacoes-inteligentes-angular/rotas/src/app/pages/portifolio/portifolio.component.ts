import { CardComponent } from "../../components/card/card.component";
import { Component } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.scss'
})
export class PortifolioComponent {

}
