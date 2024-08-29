import { CheckSampleComponent } from './check-sample/check-sample/check-sample.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoursesComponent } from './courses/courses/courses.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoursesComponent, CheckSampleComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todo alterado';
  isAliveCheckSample: boolean = false;

  disposeCheckSample():void{this.isAliveCheckSample = !this.isAliveCheckSample}
}
