import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlaysongPage } from './playsong';

@NgModule({
  declarations: [
    PlaysongPage,
  ],
  imports: [
    IonicPageModule.forChild(PlaysongPage),
  ],
})
export class PlaysongPageModule {}
