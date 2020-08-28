"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PokemonsService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs"); //of permet de transformer les données passées en paramètres, en Observable
var operators_1 = require("rxjs/operators");
var PokemonsService = /** @class */ (function () {
    function PokemonsService(http) {
        this.http = http;
        //point d'accès vers notre API à un seul endroit, dans notre service
        //l'API est générée automatiquement par InMemoryDataService
        this.pokemonUrl = 'api/pokemons';
    }
    PokemonsService.prototype.log = function (log) {
        console.info(log);
    };
    //<T> signifie que l’on type un type en lui-même
    PokemonsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.info(error);
            console.info(operation + " failed: " + error.message);
            //of transforme les données passées en paramètres, en Observable
            return rxjs_1.of(result);
        };
    };
    PokemonsService.prototype.searchPokemons = function (term) {
        var _this = this;
        if (!term.trim()) { //si term est vide
            return rxjs_1.of([]); //renvoit tableau vide sous forme d'Observable
        }
        //la propriété "name" contient ou est égale, au terme de la recherche
        return this.http.get(this.pokemonUrl + "/?name=" + term).pipe(operators_1.tap(function (_) { return _this.log("found pokemons matching \"" + term + "\""); }), operators_1.catchError(this.handleError("searchPokemons", [])));
    };
    /** DELETE pokemon */
    PokemonsService.prototype.deletePokemon = function (pokemon) {
        var _this = this;
        var url = this.pokemonUrl + "/" + pokemon.id;
        var httpOptions = {
            headers: new http_1.HttpHeaders({ 'content-type': 'application/json' })
        };
        return this.http["delete"](url, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("deleted pokemon id=" + pokemon.id); }), operators_1.catchError(this.handleError("deletePokemon")));
    };
    /** UPDATE pokemon */
    PokemonsService.prototype.updatePokemon = function (pokemon) {
        var _this = this;
        var httpOptions = {
            headers: new http_1.HttpHeaders({ 'content-type': 'application/json' })
        };
        return this.http.put(this.pokemonUrl, pokemon, httpOptions).pipe(operators_1.tap(function (_) { return _this.log("updated pokemon id=" + pokemon.id); }), operators_1.catchError(this.handleError("updatePokemon")));
    };
    /** GET pokemons */
    //retourne un Observable contenant un tableau de pokemons
    PokemonsService.prototype.getPokemons = function () {
        var _this = this;
        //http.get retourne un Observable
        //l'Observable envoie une requête GET sur la route "this.pokemonUrl"
        return this.http.get(this.pokemonUrl).pipe(
        //tap permet d'interéragir sur le déroulement des événements générés par l'Observable (par une action)
        operators_1.tap(function (_) { return _this.log("fetched pokemons"); }), 
        //catchError permet d'intercepter les erreurs éventuelles
        operators_1.catchError(this.handleError("getPokemons", [])));
    };
    /** GET pokemon */
    PokemonsService.prototype.getPokemon = function (id) {
        var _this = this;
        var url = this.pokemonUrl + "/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("fetched pokemon id=" + id); }), operators_1.catchError(this.handleError("getPokemon id=" + id)));
    };
    PokemonsService.prototype.getPokemonTypes = function () {
        return ["Plante", "Feu", "Eau", "Insecte", "Normal", "Electrik", "Poison", "Fée", "Vol"];
    };
    PokemonsService = __decorate([
        core_1.Injectable() //savoir que ce service peut avoir d'autres dépendances
    ], PokemonsService);
    return PokemonsService;
}());
exports.PokemonsService = PokemonsService;
