"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PokemonSearchComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var PokemonSearchComponent = /** @class */ (function () {
    function PokemonSearchComponent(pokemonsService, router) {
        this.pokemonsService = pokemonsService;
        this.router = router;
        //Subject: stocke les recherches successives de l’utilisateur dans un tableau de chaînes de caractères, sous la forme d’un Observable 
        this.searchTerms = new rxjs_1.Subject();
    }
    // Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
    PokemonSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    PokemonSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemons$ = this.searchTerms.pipe(
        // attendre 300ms de pause entre chaque requête
        operators_1.debounceTime(300), 
        // ignorer la recherche en cours si c'est la même que la précédente
        operators_1.distinctUntilChanged(), 
        // on retourne la liste des résultats correspondants aux termes de la recherche
        operators_1.switchMap(function (term) { return _this.pokemonsService.searchPokemons(term); }));
    };
    PokemonSearchComponent.prototype.gotoDetail = function (pokemon) {
        var link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    };
    PokemonSearchComponent = __decorate([
        core_1.Component({
            selector: 'pokemon-search',
            templateUrl: './app/pokemons/search-pokemon.component.html'
        })
    ], PokemonSearchComponent);
    return PokemonSearchComponent;
}());
exports.PokemonSearchComponent = PokemonSearchComponent;
