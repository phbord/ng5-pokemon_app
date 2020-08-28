import { Component, OnInit, HostListener } from '@angular/core';

import { Pokemon } from './pokemons/pokemon';
import { POKEMONS } from './pokemons/mock-pokemons';

@Component({
	selector: 'pokemon-app',
	templateUrl: './app/app.component.html'
})
export class AppComponent {
	public constructor(private titleService: any) {}
 
	ngOnInit() {
		this.titleService.setTitle("Mon Titre !");  
	}
}