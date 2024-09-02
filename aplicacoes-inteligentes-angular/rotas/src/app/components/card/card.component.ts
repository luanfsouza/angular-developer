import { ActivatedRoute, Router } from '@angular/router';

import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  routeId: string | null = '';
  constructor(private route: ActivatedRoute, private navegador: Router) {
    //http://localhost:4200/portifolio/{1}
    this.route.paramMap.subscribe((res) => (this.routeId = res.get('id')));
    console.log(this.routeId);

    // http://localhost:4200/portifolio/{1}?name=luan&index=123
    this.route.queryParams.subscribe((res) => console.log(res));
  }
  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegador.navigate(['/']);
    // }, 3000);
  }
}
