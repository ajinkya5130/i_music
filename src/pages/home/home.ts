import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MusicProvider]
})

export class HomePage {
  public allMusic = [];
  constructor(public loadingCtrl: LoadingController
    ,public navCtrl: NavController
    , public musicProvide: MusicProvider) {

  }

  ionViewDidLoad() {

    let loadingcontroller = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loadingcontroller.present();
    this.musicProvide.getMusicList().subscribe(
      xyz => {
        this.allMusic = xyz;

        loadingcontroller.dismiss();
      }, error => {
        console.log('error ',error);
      });

  }

}
