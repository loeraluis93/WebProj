import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Registration} from './registration';
@Component({
	selector: 'my-registration',
	templateUrl: 'app/registration.component.html'
})

export class RegistrationComponent {
	title = 'Registration';

	constructor(){}

	states = [
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
		
	]

	submitted = false;

	onSubmit() {this.submitted = true;}
	
}