import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NasabPage } from './nasab';

@NgModule({
  declarations: [
    NasabPage,
  ],
  imports: [
    IonicPageModule.forChild(NasabPage),
  ],
})
export class NasabPageModule {}
