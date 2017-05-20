import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NwappServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NwappServiceProvider {

  city: string = 'kohima';

  constructor(public http: Http) {
    
  }



  getWeather(value){
    this.city = value;
  		return this.http.get(`http://api.wunderground.com/api/5833a6a852b22fdb/conditions/q/${value}.json`)
  			.map(res => res.json());
  }


  get3dayWeather(){
        return this.http.get(`http://api.wunderground.com/api/5833a6a852b22fdb/forecast/q/${this.city}.json`)
        .map(res => res.json());
      } 

   


}
