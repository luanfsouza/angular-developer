import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit, OnChanges {
  @Input() nome: string = '';
  constructor() {
    console.log(`constructor ${this.nome}`);
  }

  ngOnInit() {
    this.nome = `Ola ${this.nome}`;
    console.log(`OnInit  ${this.nome}`);
  }
  ngOnChanges(): void {
    console.log(`OnChanges  ${this.nome}`);
  }
}
