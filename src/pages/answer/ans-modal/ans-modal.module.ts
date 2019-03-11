import { AnsModalPage } from './ans-modal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AnsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AnsModalPage),
  ],
  exports: [
    AnsModalPage
  ]
})

export class AnsModalPageModule { }