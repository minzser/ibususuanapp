import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HukumpenyusuanPage } from '../hukumpenyusuan/hukumpenyusuan';
import { NasabPage } from '../nasab/nasab';
import { PerkahwinanPage } from '../perkahwinan/perkahwinan';
import { PergaulanPage } from '../pergaulan/pergaulan';
import { PusakaPage } from '../pusaka/pusaka';
import { LainlainPage } from '../lainlain/lainlain';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
  category = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category = "details";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

  toPenyusuan(){
    this.navCtrl.push(HukumpenyusuanPage);
  }
  
  toNasab(){
    this.navCtrl.push(NasabPage);
  }

  toPerkahwinan(){
    this.navCtrl.push(PerkahwinanPage);
  }

  toPergaulan(){
    this.navCtrl.push(PergaulanPage);
  }

  toPusaka(){
    this.navCtrl.push(PusakaPage);
  }

  toLainlain(){
    this.navCtrl.push(LainlainPage);
  }

}
