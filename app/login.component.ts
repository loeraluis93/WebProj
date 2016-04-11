import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common'
import {Router} from 'angular2/router';
import {HTTPTestComponent} from './http-test.component';

@Component({
	selector: 'my-login',
	templateUrl: './app/login.component.html',
	directives: [HTTPTestComponent]
})

export class LoginComponent {
	title = 'Login';


}