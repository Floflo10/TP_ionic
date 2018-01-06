import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

/**
 * Generated class for the GmapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-gmap',
   templateUrl: 'gmap.html',
 })
 export class GmapPage {

   map: GoogleMap;

   x: string;
   y: string;
   z: string;

   constructor(public navCtrl: NavController, public navParams: NavParams, private gyroscope: Gyroscope, private googleMaps: GoogleMaps) {

     let options: GyroscopeOptions = {
       frequency: 1000
     };

     this.gyroscope.watch(options)
     .subscribe((orientation: GyroscopeOrientation) => {
       this.x = orientation.x.toString();
       this.y = orientation.y.toString();
       this.z = orientation.z.toString();
     });

   }

   loadMap() {

     let mapOptions: GoogleMapOptions = {
       camera: {
         target: {
           lat: 43.523398,
           lng: 5.432616
         },
         zoom: 18,
         tilt: 30
       }
     };

     this.map = this.googleMaps.create('map_canvas', mapOptions);

     this.map.one(GoogleMapsEvent.MAP_READY)
     .then(() => {

       this.map.addMarker({
         title: 'Ici Ynov',
         icon: 'blue',
         animation: 'DROP',
         position: {
           lat: 43.523398,
           lng: 5.432616
         }
       })
       .then(marker => {
         marker.on(GoogleMapsEvent.MARKER_CLICK)
         .subscribe(() => {
           alert('Action Réelement Inutile');
         });
       });

     });

   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad GmapPage');
     this.loadMap();
   }

 }
