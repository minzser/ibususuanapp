import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchavailablePage } from '../searchavailable/searchavailable';
import { SearchchilddataPage } from '../searchchilddata/searchchilddata';
import { SearchibusudataPage } from '../searchibusudata/searchibusudata';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  userrole = "";

  ionViewWillEnter() : void
  {
    this.userrole = window.localStorage.getItem('role');
  }

  cariIbusu(){
    this.navCtrl.push(SearchavailablePage);
  }

  dataanaksusuan(){
    this.navCtrl.push(SearchchilddataPage);
  }

  dataibususuan(){
    this.navCtrl.push(SearchibusudataPage);
  }

}