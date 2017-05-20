import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NwappServiceProvider } from '../../providers/nwapp-service/nwapp-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  weather3dayData: any;
  weatherAll: any;

  constructor(public navCtrl: NavController, public NWAppService: NwappServiceProvider) {
      
  }

  ionViewWillEnter(){

      this.NWAppService.get3dayWeather()
      .subscribe(res =>  {
        this.weather3dayData = res.forecast.txt_forecast.forecastday;
        this.weatherAll = res.forecast.simpleforecast.forecastday;
        console.log(this.weatherAll)
        });  
  	
    }
  }


