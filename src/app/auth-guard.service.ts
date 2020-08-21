import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private authService: AuthService, private router: Router) { }

	//route: future route qui sera appelée
	//state: future état de l'application qui devra passer la vérification du guard
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		let url: string = state.url;
		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean { //le guard retourne un boléen, de manière synchrone, comme résultat
		if (this.authService.isLoggedIn) { //si l'utilisateur est connecté
			return true; //retourne true et la navigation continue
		}
		this.authService.redirectUrl = url; //sinon, on stocke l'url à laquelle l'utilisateur a essayé d'accéder
		this.router.navigate(['/login']); //redirection de la page de connexion

		return false;
	}

}