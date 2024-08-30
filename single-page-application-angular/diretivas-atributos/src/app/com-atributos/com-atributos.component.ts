import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-com-atributos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './com-atributos.component.html',
  styleUrl: './com-atributos.component.scss',
})
export class ComAtributosComponent {
  estilo: string = 'enable';
  corFundo: string = 'red';
  item: string = '';
  list: string[] = [];
  isEnableBlock:boolean = true;

  adicionarLista(): void {
    this.list.push(this.item);
  }
  trocar(): void {
    this.estilo == 'enable'
      ? (this.estilo = 'disable')
      : (this.estilo = 'enable');
  }
}
