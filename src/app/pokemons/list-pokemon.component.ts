import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service'

@Component({
	selector: 'list-pokemon',
    templateUrl: './app/pokemons/list-pokemon.component.html',
    //providers: [PokemonsService] //angular accède à l'instance du service
})
export class ListPokemonComponent {
    private pokemons: Pokemon[] = null;
    private title: string = 'Liste de pokémons';
    values = '';

    //paramètres : injection des services dans le composant (construction injection pattern)
    constructor(private router: Router, private pokemonService: PokemonsService) {}

    ngOnInit(): void {
        this.getPokemons();
    }

    getPokemons(): void {
        this.pokemonService.getPokemons()
            .subscribe(pokemons => this.pokemons = pokemons);
    }

    selectPokemon(pokemon: Pokemon) {
        console.log(`Vous avez cliquer sur ${pokemon.name}`);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
}