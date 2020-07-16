import { Injectable } from '@angular/core';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable() //savoir que ce service peut avoir d'autres dépendances
export class PokemonsService {/** GET pokemons */
	getPokemons(): Pokemon[] {
		return POKEMONS;
	}

	/** GET pokemon */
	getPokemon(id: number): Pokemon{
		let pokemons = this.getPokemons();

		for (let index = 0; index < pokemons.length; index++) {
            if (id === pokemons[index].id) {
                return pokemons[index];
            }
        }
	}

	getPokemonTypes(): string[] {
		return ["Plante", "Feu", "Eau", "Insecte", "Normal", "Electrik", "Poison", "Fée", "Vol"];
	}
}