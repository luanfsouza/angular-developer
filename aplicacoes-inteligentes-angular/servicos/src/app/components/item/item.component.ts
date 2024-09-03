import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input()
  pokeName: string = '';
}
