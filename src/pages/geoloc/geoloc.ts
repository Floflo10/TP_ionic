import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
   GeoTab: Array<GeolocWatch>;


   constructor(public navCtrl: NavController, private geolocation: Geolocation) {
     this.geolocation.getCurrentPosition().then((resp) => {
       this.latitude=resp.coords.latitude;
       this.longitude=resp.coords.longitude;
       this.GeoTab = new Array<GeolocWatch>();

     }).catch((error) => {
       console.log('Error getting location', error);
     });

     this.posi();
   }

   posi() {
     this.geolocation.watchPosition().subscribe((data) => {
       this.GeoTab.push(new GeolocWatch(data.coords.latitude, data.coords.longitude));
       console.log("Testareck")
     });
   }


   ionViewDidLoad() {
     console.log('ionViewDidLoad GeolocPage');
   }

 }

 export class GeolocWatch {

   constructor (public Longi: number, public Latit: number){

   }
 }
