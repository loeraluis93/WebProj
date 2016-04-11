import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS, RouterOutlet} from 'angular2/router';
import {LoginComponent} from './login.component';
import {RegistrationComponent} from './registration.component';
import {HomeComponent} from './home.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
    	ROUTER_PROVIDERS
    ]
})
@RouteConfig([
	{
		path: '/home',
		name: 'Home',
		component: HomeComponent,
		useAsDefault: true
	},
	{
		path: '/login',
		name:	'Login',
		component: LoginComponent,
	},
	{
		path: '/registration',
		name: 'Registration',
		component: RegistrationComponent
	}
])

export class AppComponent { 
	title = 'Web-application';
	fresh = true;

}
