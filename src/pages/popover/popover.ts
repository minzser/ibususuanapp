import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',

  template: `
    <ion-item (click)="about()"><ion-icon name="md-information-circle"></ion-icon>&nbsp;&nbsp;Tentang Aplikasi
    </ion-item>
    <ion-item (click)="logout()"><ion-icon name="md-exit"></ion-icon>&nbsp;&nbsp;Log Keluar     
    </ion-item>
    `
})

export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _app: App) {
  }


  logout(){
    window.localStorage.removeItem('icnumber');
    window.localStorage.clear();
 
    this._app.getRootNav().setRoot(LoginPage);
  }

  about(){
    this.navCtrl.push(AboutPage);
  }

}