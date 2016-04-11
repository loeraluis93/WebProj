System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var RegistrationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            RegistrationComponent = (function () {
                function RegistrationComponent() {
                    this.title = 'Registration';
                    this.states = [
                        '',
                        'Aguascalientes',
                        'Baja California',
                        'Baja California Sur',
                        'Campeche',
                        'Chihuahua',
                        'Coahuila',
                        'Colima',
                        'Durango',
                        'Estado de México',
                        'Guanajuato',
                        'Guerrero',
                        'Hidalgo',
                        'Jalisco',
                        'Michoacán',
                        'Morelos',
                        'Nayarit',
                        'Nuevo León',
                        'Oaxaca',
                        'Puebla',
                        'Querétaro',
                        'Quintana Roo',
                        'San Luis Potosí',
                        'Sinaloa',
                        'Sonora',
                        'Tabasco',
                        'Tamaulipas',
                        'Tlaxcala',
                        'Veracruz',
                        'Yucatán',
                        'Zacatecas'
                    ];
                    this.submitted = false;
                }
                RegistrationComponent.prototype.onSubmit = function () { this.submitted = true; };
                RegistrationComponent = __decorate([
                    core_1.Component({
                        selector: 'my-registration',
                        templateUrl: 'app/registration.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], RegistrationComponent);
                return RegistrationComponent;
            }());
            exports_1("RegistrationComponent", RegistrationComponent);
        }
    }
});
//# sourceMappingURL=registration.component.js.map