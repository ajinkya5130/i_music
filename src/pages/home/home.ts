import { Component } from '@angular/core';
import { NavController,LoadingController,ActionSheetController } from 'ionic-angular';
import { MusicProvider } from '../../providers/music/music';
import { SocialSharing } from '@ionic-native/social-sharing';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MusicProvider]
})

export class HomePage {
  public allMusic = [];
  constructor(public loadingCtrl: LoadingController
    ,public navCtrl: NavController
    , public musicProvide: MusicProvider
  , public actioncontroller: ActionSheetController) {

  }

  shareSong(music){
    let shareSongActionSheet = this.actioncontroller.create({
      title: "Share Song",
      buttons:[
        {text: "Facebook",
      icon:"logo-facebook"
   /*  handler: ()=>{
      this.socialSharing.shareViaFacebook(music.name,music.image,music.music_url)
    } */},
        {text: "Instagram",
      icon:"logo-instagram",
   /*  handler: ()=>{
      this.socialSharing.shareViaInstagram(music.name,music.image_url)
    } */},
        {text: "Twitter",
      icon:"logo-twitter"
   /*  handler:()=>{
      this.socialSharing.shareViaTwitter(music.name,music.image,music.music_url)
    } */},
        {text: "Google+",icon:"logo-googleplus"},
        {
          text:"Cancle",
          icon:"close",
          role:"destroy"
        }
      ]
    });
    shareSongActionSheet.present();
  }

  ionViewDidLoad() {

  /*   let loadingcontroller = this.loadingCtrl.create({
      content: 'Please wait...'
    }); */
  
   // loadingcontroller.present();
    this.musicProvide.getMusicList().subscribe(
      xyz => {
        this.allMusic = xyz;

      //  loadingcontroller.dismiss();
      }, error => {
        console.log('error ',error);
      });

  }

}
