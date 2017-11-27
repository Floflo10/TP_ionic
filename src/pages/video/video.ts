import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  providers: [MediaCapture, Toast],
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor( public navCtrl: NavController, private mediaCapture: MediaCapture, private toast: Toast) {

  }

    startrecording() {
    let options: CaptureImageOptions = { limit: 3 };
    this.mediaCapture.captureVideo(options).then(
    (data: MediaFile[]) => this.coucou()
     );

  }

coucou() {
      this.toast.show(`Je suis un grill pain qui enregistre ta vidéo`, '5000', 'center').subscribe(
  toast => {
    console.log(toast);
  });
}
}





