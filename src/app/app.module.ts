import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //démarre le module dans le navigateur + @angular/common

import { PokemonsModule } from './pokemons/pokemons.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
	imports: [ //classes nécessaires au fonctionnement du module
		BrowserModule, //n°1
		PokemonsModule, //n°2
		AppRoutingModule, //n°3
	],
	exports: [], //sous-ensemble de classes de vues à exporter
	providers: [], //service au module
	declarations: [ //classes de vues (composant, directives et pipes)
		AppComponent,
		PageNotFoundComponent,
	],
	bootstrap: [AppComponent] //composant racine pour le module racine
})
export class AppModule { }