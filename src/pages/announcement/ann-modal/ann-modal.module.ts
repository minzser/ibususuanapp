import { AnnModalPage } from './ann-modal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AnnModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnModalPage),
  ],
  exports: [
    AnnModalPage
  ]
})

export class AnnModalPageModule { }