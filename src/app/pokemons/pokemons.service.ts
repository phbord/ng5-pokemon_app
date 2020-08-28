import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; //of permet de transformer les données passées en paramètres, en Observable
import { catchError, map, tap } from 'rxjs/operators';

import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Injectable() //savoir que ce service peut avoir d'autres dépendances
export class PokemonsService {
	constructor(private http: HttpClient) {}

	//point d'accès vers notre API à un seul endroit, dans notre service
	//l'API est générée automatiquement par InMemoryDataService
	private pokemonUrl = 'api/pokemons';

	private log(log: string) {
		console.info(log);
	}

	//<T> signifie que l’on type un type en lui-même
	private handleError<T>(operation='operation', result?: T) {
		return (error: any): Observable<T> => {
			console.info(error);
			console.info(`${operation} failed: ${error.message}`);

			//of transforme les données passées en paramètres, en Observable
			return of(result as T);
		};
	}

	searchPokemons(term: string): Observable<Pokemon[]> {
		if (!term.trim()) { //si term est vide
			return of([]); //renvoit tableau vide sous forme d'Observable
		}

		//la propriété "name" contient ou est égale, au terme de la recherche
		return this.http.get<Pokemon[]>(`${this.pokemonUrl}/?name=${term}`).pipe(
			tap(_ => this.log(`found pokemons matching "${term}"`)), 
			catchError(this.handleError<Pokemon[]>(`searchPokemons`, []))
		);
	}

	/** DELETE pokemon */
	deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
		const url = `${this.pokemonUrl}/${pokemon.id}`;
		const httpOptions = {
			headers: new HttpHeaders({'content-type': 'application/json'})
		};

		return this.http.delete<Pokemon>(url, httpOptions).pipe(
			tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)), 
			catchError(this.handleError<Pokemon>(`deletePokemon`)) 
		);
	}

	/** UPDATE pokemon */
	updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
		const httpOptions = {
			headers: new HttpHeaders({'content-type': 'application/json'})
		};

		return this.http.put(this.pokemonUrl, pokemon, httpOptions).pipe(
			tap(_ => this.log(`updated pokemon id=${pokemon.id}`)), 
			catchError(this.handleError<any>(`updatePokemon`)) 
		);
	}

	/** GET pokemons */
	//retourne un Observable contenant un tableau de pokemons
	getPokemons(): Observable<Pokemon[]> { 
		//http.get retourne un Observable
		//l'Observable envoie une requête GET sur la route "this.pokemonUrl"
		return this.http.get<Pokemon[]>(this.pokemonUrl).pipe( 
			//tap permet d'interéragir sur le déroulement des événements générés par l'Observable (par une action)
			tap(_ => this.log(`fetched pokemons`)), 
			//catchError permet d'intercepter les erreurs éventuelles
			catchError(this.handleError(`getPokemons`, [])) 
		);
	}

	/** GET pokemon */
	getPokemon(id: number): Observable<Pokemon>{
		const url = `${this.pokemonUrl}/${id}`;
		
		return this.http.get<Pokemon>(url).pipe( 
			tap(_ => this.log(`fetched pokemon id=${id}`)), 
			catchError(this.handleError<Pokemon>(`getPokemon id=${id}`)) 
		);
	}

	getPokemonTypes(): string[] {
		return ["Plante", "Feu", "Eau", "Insecte", "Normal", "Electrik", "Poison", "Fée", "Vol"];
	}
}