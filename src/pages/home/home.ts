import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  providers: [Camera],
  templateUrl: 'home.html'
})

export class HomePage {


  public base64Image: string;


  app: AppData;

  constructor(private camera:Camera, public navCtrl: NavController) {
    this.app = new AppData("Nom", 0.4);

  }

  presentActionSheet() {
    console.log("bouille");

  }

  options: CameraOptions = {
    quality: 100,
    correctOrientation: true,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  takePicture(){
    this.camera.getPicture(this.options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }



}


class AppData{

  nom:String;
  version:Number;

  constructor(public name:String, public versionnig:Number) {}

}
