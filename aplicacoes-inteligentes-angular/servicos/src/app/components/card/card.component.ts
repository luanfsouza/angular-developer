import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PokemonData } from '../../models/pokemonData';
import { PokemonService } from '../../services/pokemon.service';
import { resolve } from 'node:path';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  pokemon?: PokemonData;
  pokemonEscolhido: string = 'pikachu';
  pokeNameUrl: string = '';
  constructor(
    private service: PokemonService,
    private http: HttpClient,
  ) {}
  ngOnInit(): void {
  
    this.getPokemon('pikachu');
  }
  getPokemon(searchName: string) {
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
