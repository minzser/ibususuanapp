import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchchilddataPage } from '../searchchilddata/searchchilddata';
import { SearchibusudataPage } from '../searchibusudata/searchibusudata';

@IonicPage()
@Component({
  selector: 'page-guest',
  templateUrl: 'guest.html',
})
export class GuestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  dataanaksusuan(){
    this.navCtrl.push(SearchchilddataPage);
  }

  dataibususuan(){
    this.navCtrl.push(SearchibusudataPage);
  }

}
