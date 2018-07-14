import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MusicProvider]
})

export class HomePage {
  public allMusic = [];
  constructor(public navCtrl: NavController, public musicProvide: MusicProvider) {

  }

  ionViewDidLoad() {
    this.musicProvide.getMusicList().subscribe(
      xyz => {
        this.allMusic = xyz;
        console.log('Ajinkya');

      }, error => {
        console.log('error');
      });

  }

}
