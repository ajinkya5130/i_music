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
  constructor(public loadingCtrl: LoadingController,
    private socialSharing: SocialSharing
     ,public navCtrl: NavController
    , public musicProvide: MusicProvider
  , public actioncontroller: ActionSheetController) {

  }

  shareSong(music){
    
    let loadingcontroller = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
   
    let shareSongActionSheet = this.actioncontroller.create({
      title: "Share Song",
      buttons:[
        //Facebook
        {text: "Facebook",
      icon:"logo-facebook",
    handler: ()=>{
      loadingcontroller.present();
      this.socialSharing.shareViaFacebook(music.name,music.image,music.music_url).then( 
        (data)=>{
            console.log("Data: "+data);
        }
      ).catch((errorLOg)=>{
        loadingcontroller.dismiss();
        console.log("Error "+errorLOg);
      })
    }},
    //Instagram
        {text: "Instagram",
      icon:"logo-instagram",
    handler: ()=>{
      loadingcontroller.present();
      this.socialSharing.shareViaInstagram(music.name,music.image_url).then( 
        (data)=>{
            console.log("Data: "+data);
        }
      ).catch((errorLOg)=>{
        loadingcontroller.dismiss();
        console.log("Error "+errorLOg);
      })
    }},
    //Twitter
        {text: "Twitter",
      icon:"logo-twitter",
    handler:()=>{
      loadingcontroller.present();
      this.socialSharing.shareViaTwitter(music.name,music.image,music.music_url).then( 
        (data)=>{
            console.log("Data: "+data);
        }
       
      ).catch((errorLOg)=>{
        loadingcontroller.dismiss();
        console.log("Error "+errorLOg);
      })
    }},
    //Google Plus
        {text: "Google+",icon:"logo-googleplus",
      handler:()=>{
        loadingcontroller.present();
        this.socialSharing.shareViaWhatsApp(music.name,music.image,music.music_url).then( 
          (data)=>{
              console.log("Data: "+data);
          }
        ).catch((errorLOg)=>{
          loadingcontroller.dismiss();
          console.log("Error "+errorLOg);
        })
      }},
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
