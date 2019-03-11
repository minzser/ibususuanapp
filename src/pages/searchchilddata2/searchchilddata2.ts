import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Searchchilddata2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchchilddata2',
  templateUrl: 'searchchilddata2.html',
})
export class Searchchilddata2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Searchchilddata2Page');
  }

  ionViewWillEnter() : void {
    if(this.navParams.get("record"))
    {
      this.selectEntry(this.navParams.get("record"));
    }
  }

  mykid = "";
name = "";
parent = "";
icparent ="";
ibususuan ="";
icibususuan ="";
full : any;
checking : any;
checkfull : any;

  selectEntry(item : any) : void
   {
      this.mykid = item.mykid;
      this.name = item.name;
      this.parent = item.parent;
      this.icparent = item.icparent;
      this.ibususuan = item.ibususuan;
      this.icibususuan = item.icibususuan;
      this.full = parseInt(item.full);

      if(item.icibususuan == "Tiada" || this.full < 5){
        
      } else {
        this.checking="Yes";
      }

   }

}
