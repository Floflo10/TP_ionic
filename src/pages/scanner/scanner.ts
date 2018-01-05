import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shake } from '@ionic-native/shake';
import { Toast } from '@ionic-native/toast';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-scanner',
   templateUrl: 'scanner.html',
 })
 export class ScannerPage {

   public scanText: string;
   public scanFormat: string;

   quotes :any;
   private apiUrl :string = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10";

   constructor(public navCtrl: NavController, public navParams: NavParams, private shake: Shake, private toast: Toast, private barcodeScanner: BarcodeScanner, private socialSharing: SocialSharing) {
     this.shake.startWatch(60).subscribe(() => {
       this.toast.show(`Je suis un Grille Pain qui se trémousse`, '5000', 'center').subscribe(
         toast => {
           console.log(toast);
         });

     });
   }


  twitterShare(){
    this.socialSharing.shareViaTwitter("Message via Twitter",null /*Image*/,"https://pointdeveloper.com")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

  facebookShare(){
    this.socialSharing.shareViaFacebook("Message via Twitter",null /*Image*/,"https://pointdeveloper.com")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })
  }

  otherShare(){
    this.socialSharing.share("Genral Share Sheet",null/*Subject*/,null/*File*/,"https://pointdeveloper.com")
    .then(()=>{
        alert("Success");
      },
      ()=>{
         alert("failed")
      })

  }

   scan() {
     this.barcodeScanner.scan().then((barcodeData) => {
       this.scanText = barcodeData.text;
       this.scanFormat = barcodeData.format;
     }, (err) => {
       alert(err);
     });
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad ScannerPage');
   }

 }


