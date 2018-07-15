import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';

/**
 * Generated class for the PlaysongPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-playsong',
  templateUrl: 'playsong.html',
})
export class PlaysongPage {
  public music = {} ;
  private songMedia :MediaObject =null;

  private isMediaPaused =false;
  constructor(private media: Media,public navCtrl: NavController, public navParams: NavParams) {
    this.music = this.navParams.get("music");
  }
  playmusic(){
    if(this.songMedia === null){
      this.songMedia = this.media.create(this.music["music_url"]);
      this.songMedia.play();
      

    }else{
      if(this.isMediaPaused === true){
        this.songMedia.play();
        this.isMediaPaused = false;
      }
    }

  }
  stopmusic(){

    
    if(this.songMedia !== null){
      this.songMedia.stop();
      this.songMedia.release();
      this.songMedia =null;
    }

  }
  pausemusic(){

    
    if(this.songMedia !== null){
      this.songMedia.pause();
      this.isMediaPaused =true;

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlaysongPage');
  }

}
