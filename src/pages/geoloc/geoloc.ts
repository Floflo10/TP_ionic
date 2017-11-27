import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {Observable} from 'rxjs/Rx';

/**
 * Generated class for the GeolocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geoloc',
  providers: [Geolocation],
  templateUrl: 'geoloc.html',
})
export class GeolocPage {

  longitude: number;
  latitude: number;
  poslat: number;
  poslng: number;
  i: number;

 // Geo: Array<GeolocWatch> = new Array<GeolocWatch>();


  constructor(public zone: NgZone, public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
    this.latitude=resp.coords.latitude;
    this.longitude=resp.coords.longitude;
}).catch((error) => {
  console.log('Error getting location', error);
});


  Observable.interval(2).subscribe(x => {
    this.posi();
  });


  }

posi() {
  this.geolocation.watchPosition().subscribe(position => {
  this.zone.run(() => {
    this.poslat = position.coords.latitude;
    this.poslng = position.coords.longitude;
  });
});
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocPage');
  }

}

class GeolocWatch {
  constructor (public Longi: number, public Latit: number){

  }
}
