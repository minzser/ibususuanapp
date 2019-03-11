import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileadminPage } from './profileadmin';

@NgModule({
  declarations: [
    ProfileadminPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileadminPage),
  ],
})
export class ProfileadminPageModule {}
