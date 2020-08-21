import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //démarre le module dans le navigateur + @angular/common
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { PokemonsModule } from './pokemons/pokemons.module';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
	imports: [ //classes nécessaires au fonctionnement du module
		BrowserModule,
		FormsModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }), //dataEncapsulation: précise le format renvoyé par l'API
		PokemonsModule,
		LoginRoutingModule,
		AppRoutingModule,
	],
	exports: [], //sous-ensemble de classes de vues à exporter
	providers: [], //service au module
	declarations: [ //classes de vues (composant, directives et pipes)
		AppComponent,
		LoginComponent,
		PageNotFoundComponent,
	],
	bootstrap: [AppComponent] //composant racine pour le module racine
})
export class AppModule { }