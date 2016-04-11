import {provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import 'rxjs/Rx';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	HTTP_PROVIDERS
]);