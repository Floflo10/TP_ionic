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

   constructor(public navCtrl: NavController, public navParams: NavParams, private shake: Shake, private toast: Toast, private barcodeScanner: BarcodeScanner, private socialSharing: SocialSharing) {
     this.shake.startWatch(60).subscribe(() => {
       this.toast.show(`Je suis un Grille Pain qui se trémousse`, '5000', 'center').subscribe(
         toast => {
           console.log(toast);
         });

     });
   }

   twitterShare(){
     this.socialSharing.shareViaTwitter("Bienvenue dans le futur !", null /*Image*/, "https://www.unrealengine.com/")
     .then(()=>{
     },
     (err)=>{
       alert("Vérifier votre connection au service demandé :)");
       console.log(err);
     });
   }

   facebookShare(){
     this.socialSharing.shareViaFacebook("Pour une petite dose d'art c'est par ici !", null /*Image*/, "https://www.artstation.com/")
     .then(()=>{
     },
     (err)=>{
       alert("Vérifier votre connection au service demandé :)");
       console.log(err);
     });
   }

   otherShare(){
     this.socialSharing.share("Dans la section Learn ce trouve des cours très interessant !", "Hey ! Je partage", null /*Fichier*/, "https://www.allegorithmic.com/products/substance-painter")
     .then(()=>{
     },
     (err)=>{
       alert("Vérifier votre connection au service demandé :)");
       console.log(err);
     });
   }

   scan() {
     this.barcodeScanner.scan().then((barcodeData) => {
       this.scanText = barcodeData.text;
       this.scanFormat = barcodeData.format;
     }, (err) => {
       alert("Quelque chose c'est mal passé :)");
       console.log(err);
     });
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad ScannerPage');
   }

 }


