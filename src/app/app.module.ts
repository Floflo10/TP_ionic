import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GeolocPage } from '../pages/geoloc/geoloc';
import { VideoPage } from '../pages/video/video';
import { ScannerPage } from '../pages/scanner/scanner';
import { GmapPage } from '../pages/gmap/gmap';

import { GeolocPageModule } from '../pages/geoloc/geoloc.module';
import { VideoPageModule } from '../pages/video/video.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';
import { GmapPageModule } from '../pages/gmap/gmap.module';

import { Geolocation } from '@ionic-native/geolocation';
import { MediaCapture } from '@ionic-native/media-capture';
import { Toast } from '@ionic-native/toast';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Vibration } from '@ionic-native/vibration';
import { Shake } from '@ionic-native/shake';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Gyroscope } from '@ionic-native/gyroscope';
import { GoogleMaps } from '@ionic-native/google-maps';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GeolocPageModule,
    VideoPageModule,
    ScannerPageModule,
    GmapPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GeolocPage,
    VideoPage,
    ScannerPage,
    GmapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    MediaCapture,
    Toast,
    LocalNotifications,
    Vibration,
    TextToSpeech,
    Shake,
    BarcodeScanner,
    SocialSharing,
    Gyroscope,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
