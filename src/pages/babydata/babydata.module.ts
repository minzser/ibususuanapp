import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BabydataPage } from './babydata';

@NgModule({
  declarations: [
    BabydataPage,
  ],
  imports: [
    IonicPageModule.forChild(BabydataPage),
  ],
})
export class BabydataPageModule {}
