"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
//import 'rxjs/add/observable/of';
var Rx = require("rxjs/Rx");
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/delay';
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isLoggedIn = false; // L'utilisateur est-il connecté ?
    }
    // Une méthode de connexion
    AuthService.prototype.login = function (name, password) {
        var _this = this;
        // Faites votre appel à un service d'authentification...
        var isLoggedIn = (name === 'admin' && password === 'admin');
        //return Observable.of(true).delay(1000).do(val => this.isLoggedIn = isLoggedIn);
        return Rx.Observable.of(true).delay(1000)["do"](function () { return _this.isLoggedIn = isLoggedIn; });
    };
    // Une méthode de déconnexion
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
