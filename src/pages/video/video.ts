import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureImageOptions } from '@ionic-native/media-capture';
import { Toast } from '@ionic-native/toast';
import { Camera } from '@ionic-native/camera';


/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-video',
   providers: [MediaCapture, Toast, Camera],
   templateUrl: 'video.html',
 })
 export class VideoPage {

  @ViewChild('myvideo') myVideo: any;
   constructor( public navCtrl: NavController, private mediaCapture: MediaCapture, private toast: Toast, private camera:Camera) {

   }

   startrecording() {
     let options: CaptureImageOptions = { limit: 3 };
     this.mediaCapture.captureVideo(options).then(
       (data: MediaFile[]) => this.coucou()
       );

   }

   coucou() {
     this.toast.show(`Je suis un Grille Pain qui enregistre ta vidéo`, '5000', 'center').subscribe(
       toast => {
         console.log(toast);
       });

     this.selectvideo();

   }


     selectvideo() {
    let video = this.myVideo.nativeElement;
    var options = {
      sourceType: 2,
      mediaType: 1
    };

    this.camera.getPicture(options).then((data) => {
      video.src = data;
      video.play();
    });

 }

}





