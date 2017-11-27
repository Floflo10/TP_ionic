import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { GeolocPageModule } = require("../pages/geoloc/geoloc.module.ts");
import { Camera, CameraOptions} from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  providers: [Camera, Base64ToGallery, Vibration],
  templateUrl: 'home.html'
})

export class HomePage {


  public base64Image: string;


  app: AppData;

  constructor(private camera:Camera, public navCtrl: NavController, private base64ToGallery: Base64ToGallery, private localNotifications: LocalNotifications, private vibration: Vibration) {
    this.app = new AppData("Nom", 0.4);

  }

  presentActionSheet() {
    console.log("bouille");

  }

  options: CameraOptions = {
    quality: 100,
    correctOrientation: true,
    saveToPhotoAlbum: true,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  takePicture(){
    this.vibration.vibrate(1000);
    this.camera.getPicture(this.options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

save() {
    this.base64ToGallery.base64ToGallery(this.base64Image, { prefix: '_img', mediaScanner: true }).then(
  res => console.log('Saved image to gallery ', res),
  err => console.log('Error saving image to gallery ', err)

);
          this.localNotifications.schedule({
  id: 1,
  text: 'Je te signal que la photo est peut-être enregistrée',
  led: 'FF0000',
});

}

}


class AppData{

  nom:String;
  version:Number;

  constructor(public name:String, public versionnig:Number) {}

}
