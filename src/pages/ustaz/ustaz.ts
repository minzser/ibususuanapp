import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, PopoverController } from 'ionic-angular';
import { ForumPage } from '../forum/forum';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { PopoverPage } from '../popover/popover';

/**
 * Generated class for the UstazPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ustaz',
  templateUrl: 'ustaz.html',
})
export class UstazPage {

  constructor(public popoverCtrl : PopoverController,public navCtrl: NavController, public navParams: NavParams, public _app: App) {
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UstazPage');
  }


  edit(){
    this.navCtrl.push(ProfilePage);
  }

  forum(){
    this.navCtrl.push(ForumPage)
  }

  logout(){
    window.localStorage.removeItem('icnumber');
    window.localStorage.clear();
 
    this._app.getRootNav().setRoot(LoginPage);
  }
}
