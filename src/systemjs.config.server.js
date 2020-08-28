/**
 * Version de SystemJS dédié à la production.
 * Les paquets sont chargés depuis le web.
 */
(function(global) {
    System.config({
        paths: {
            'npm:': 'https://unpkg.com/' //Nouvel alias
        },

        map: {
            app: 'dist',
            '@angular/core': 'npm:@angular/core@9.1.5/bundles/core.umd.min.js',
            '@angular/common': 'npm:@angular/common@9.1.5/bundles/common.umd.min.js',
            '@angular/compiler': 'npm:@angular/compiler@9.1.5/bundles/compiler.umd.min.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser@9.1.5/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@9.1.5/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/http': 'npm:@angular/http@7.2.16/bundles/http.umd.min.js',
            '@angular/common/http': 'npm:@angular/common@9.1.5/bundles/common-http.umd.min.js',
            '@angular/router': 'npm:@angular/router@9.1.5/bundles/router.umd.min.js',
            '@angular/forms': 'npm:@angular/forms@9.1.5/bundles/forms.umd.min.js',
            'rxjs': 'npm:rxjs@6.5.4',
            'rxjs-compat': 'npm:rxjs-compat@6.5.4',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api@0.11.0/bundles/in-memory-web-api.umd.js',
            'tslib': 'npm:tslib/tslib.js'
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);