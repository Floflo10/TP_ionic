import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  providers: [Camera, Base64ToGallery, Vibration],
  templateUrl: 'home.html'
})

export class HomePage {


  public base64Image: string;
  public printPicture: string;


  app: AppData;

  constructor(private tts: TextToSpeech, private camera:Camera, public navCtrl: NavController, private base64ToGallery: Base64ToGallery, private localNotifications: LocalNotifications, private vibration: Vibration) {
    this.app = new AppData("Nom", 0.4, "Je peux parler");

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
    this.vibration.vibrate(1000);
    this.camera.getPicture(this.options).then((imageData) => {
      this.base64Image = imageData;
      this.printPicture =  'data:image/jpeg;base64,' + imageData;
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
      icon: 'file://assets/imgs/icon.png',
      smallIcon: 'res://icon',
      led: 'ffb42b',
    });

  }

talk() {
  this.tts.speak({text: this.app.speech, locale: 'fr-FR'})
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
}

}


class AppData{

  nom:String;
  version:Number;
  speech:string;

  constructor(public name:String, public versionnig:Number, public speecher:string) {}

}
