import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

// routes
const appRoutes: Routes = [
    { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' }, //en avant-dernier
    { path: '**', component: PageNotFoundComponent }, //en dernier
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes) //définition des routes du module racine
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }