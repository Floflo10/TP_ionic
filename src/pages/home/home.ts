import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  app: AppData;

  constructor(public navCtrl: NavController) {
    this.app = new AppData("Nom", 0.3);

  }

    presentActionSheet() {
console.log("bouille");

  }
}

class AppData{

nom:String;
version:Number;

constructor(public name:String, public versionnig:Number) {}

}
