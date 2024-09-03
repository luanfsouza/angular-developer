import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PokemonData } from '../../models/pokemonData';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-poke-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.scss',
})
export class PokeCardComponent {
  pokemon?: PokemonData;
  pokemonEscolhido: string = '';
  pokeNameUrl: string | null = '';
  constructor(
    private service: PokemonService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({next: (res)=> this.pokeNameUrl = res.get("name")})
    this.getPokemon(this.pokeNameUrl);
  }
  getPokemon(searchName: string | any) {
    this.service.getPokemon(searchName).subscribe({
      next: (resposta) => {
        this.pokemon = {
          id: resposta.id,
          name: resposta.name.toUpperCase(),
          types: resposta.types,
          sprites: resposta.sprites,
        };

        console.log(resposta.id);
        console.log(resposta.name);
        console.log(resposta.sprites.front_default);
        console.log(resposta.types);
      },
      error: (err) => console.log(err),
    });
    console.log(searchName);
  }
}
