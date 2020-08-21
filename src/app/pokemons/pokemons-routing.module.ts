import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth-guard.service';

import { ListPokemonComponent } from './list-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';

// routes definition
const pokemonsRoutes: Routes = [
	//Authenfication sur une seule route
	/*{ path: 'pokemons', component: ListPokemonComponent },
	{ path: 'pokemon/edit/:id', component: EditPokemonComponent, canActivate: [AuthGuard] },
	{ path: 'pokemon/:id', component: DetailPokemonComponent }
	*/

	//Authenfication sur toutes les routes
	{
		path: 'pokemon',
		canActivate: [AuthGuard],
		children: [
			{ path: 'all', component: ListPokemonComponent },
			{ path: 'edit/:id', component: EditPokemonComponent },
			{ path: ':id', component: DetailPokemonComponent }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(pokemonsRoutes) //définition des routes de nos sous-modules
	],
	exports: [
		RouterModule
	]
})
export class PokemonRoutingModule { }