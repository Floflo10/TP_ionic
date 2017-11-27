import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GeolocPageModule } from '../pages/geoloc/geoloc.module';
import { VideoPageModule } from '../pages/video/video.module';
import { Geolocation } from '@ionic-native/geolocation';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { Toast } from '@ionic-native/toast';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Vibration } from '@ionic-native/vibration';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    GeolocPageModule,
    VideoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    MediaCapture,
    Toast,
    LocalNotifications,
    Vibration,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
