import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  produtos: string[] = [];
  menuType:string = '';
  
  constructor() {
    this.produtos = ['mouse', 'teclado', 'cabo', 'font'];
  }

  adicionar():void{
    this.produtos.push(`felipe-0${this.produtos.length+1}`)
  }
  remover(index:number):void{
    this.produtos.splice(index, 1)
  }
}
