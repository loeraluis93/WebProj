import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
//import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class HTTPTestService{
	constructor( private _http: Http){}

	getCurrentTime(){
		return this._http.get('http://time.jsontest.com')
		.map(res => res.json().data)
		//.do(data => console.log(data))
		.catch(this.handleError);
	}

	private handleError(error: Response){
	 console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
	postJSON(){

	}
}