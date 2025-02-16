import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import 'rxjs/add/observable/of';
import * as Rx from 'rxjs/Rx';
import { delay } from 'rxjs/operators';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
	isLoggedIn: boolean = false; // L'utilisateur est-il connecté ?
	redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?

	// Une méthode de connexion
	login(name: string, password: string): Observable<boolean> {
		// Faites votre appel à un service d'authentification...
		let isLoggedIn = (name === 'admin' && password === 'admin');

		//return Observable.of(true).delay(1000).do(val => this.isLoggedIn = isLoggedIn);
		return Rx.Observable.of(true).delay(1000).do(() => this.isLoggedIn = isLoggedIn);
	}

	// Une méthode de déconnexion
	logout(): void {
		this.isLoggedIn = false;
	}
}