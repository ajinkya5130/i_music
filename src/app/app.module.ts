import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
//
import { SocialSharing } from '@ionic-native/social-sharing';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MusicProvider } from '../providers/music/music';
import {enableProdMode} from '@angular/core';
import { PlaysongPage } from '../pages/playsong/playsong';
import { Media } from '@ionic-native/media';

enableProdMode();
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PlaysongPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), HttpClientModule
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PlaysongPage
  ],
  providers: [
    Media,
    SocialSharing,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicProvider, HttpClient
  ]
})
export class AppModule {}
