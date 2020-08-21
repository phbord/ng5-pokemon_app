import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
	selector: 'detail-pokemon',
	templateUrl: './app/pokemons/detail-pokemon.component.html',
	//providers: [PokemonsService]
})
export class DetailPokemonComponent implements OnInit {

	pokemon: Pokemon = null;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pokemonsService: PokemonsService) { }

	ngOnInit(): void {
		// + => caste la valeur de droite en Nombre
		// this.route => permet de passer les paramètres passés dans le constructeur
		// snapshot => récupération des paramètres de façon synchrone
		let id = +this.route.snapshot.params['id'];

		this.pokemonsService.getPokemon(id)
			.subscribe(pokemon => this.pokemon = pokemon);
	}

	delete(pokemon: Pokemon): void {
		this.pokemonsService.deletePokemon(pokemon)
			.subscribe(_ => this.goBack());
	}

	goBack(): void {
		this.router.navigate(['/pokemon/all']);
	}

	goEdit(pokemon: Pokemon): void {
		let link = ['/pokemon/edit', pokemon.id];
		this.router.navigate(link);
	}

}