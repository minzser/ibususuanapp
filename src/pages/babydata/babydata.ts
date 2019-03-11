import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterchildPage } from '../registerchild/registerchild';
import { ViewchildPage } from '../viewchild/viewchild';
import { AssignchildPage } from '../assignchild/assignchild';
import { ManagechildPage } from '../managechild/managechild';
import { AddbmchildPage } from '../addbmchild/addbmchild';

/**
 * Generated class for the BabydataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-babydata',
  templateUrl: 'babydata.html',
})
export class BabydataPage {

  role : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewWillEnter() : void
  {
    this.role = window.localStorage.getItem('role');
  }

  toRegisterchild(){
    this.navCtrl.push(RegisterchildPage);
  }

  toViewchild(){
    this.navCtrl.push(ViewchildPage);
  }

  toAssignchild(){
    this.navCtrl.push(AssignchildPage);
  }

  toManagechild(){
    this.navCtrl.push(ManagechildPage);
  }

  toAddbmChild(){
    this.navCtrl.push(AddbmchildPage);
  }

}
