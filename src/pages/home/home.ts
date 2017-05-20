import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NwappServiceProvider } from '../../providers/nwapp-service/nwapp-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weatherData: any;

  constructor(public navCtrl: NavController, public NWAppService: NwappServiceProvider) {

  }

  ngOnInit(){
  	
  }

  getweather(value){
  	this.NWAppService.getWeather(value)
  		.subscribe(res => {this.weatherData = res.current_observation});
  }

}
