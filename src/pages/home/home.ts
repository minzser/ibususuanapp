import { Component } from '@angular/core';
import { NavController, App, PopoverController } from 'ionic-angular';
import { FaqPage } from '../faq/faq';
import { BabydataPage } from '../babydata/babydata';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { MessagePage } from '../message/message';
import { ForumPage } from '../forum/forum';
import { SearchPage } from '../search/search';
import { AnnouncementPage } from '../announcement/announcement';
import { AdminpagePage } from '../adminpage/adminpage';
import { PopoverPage } from '../popover/popover';
import { NotificationPage } from '../notification/notification';
import { HttpClient } from '@angular/common/http';


import { Badge } from '@ionic-native/badge/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private badge: Badge, public http   : HttpClient, public navCtrl: NavController, public _app: App,public popoverCtrl: PopoverController) {
    this.role = window.localStorage.getItem('role');
  }

  role = "";
  redirect = ['toForum()','toFAQ()','toProfile()','toForum()','toForum()','toForum()'];

  toProfile(){
    this.navCtrl.push(ProfilePage);
  }

  toFAQ(){
    this.navCtrl.push(FaqPage);
  }

  toBabydata(){
    this.navCtrl.push(BabydataPage);
  }

  toForum(){
    this.navCtrl.push(ForumPage);
  }

  toSearch(){
    this.navCtrl.push(SearchPage);
  }

  toAnnounce(){
    this.navCtrl.push(AnnouncementPage);
  }

  logout(){
    window.localStorage.removeItem('icnumber');
    window.localStorage.clear();
 
    this._app.getRootNav().setRoot(LoginPage);
  }

  showNotifications(){
    this.navCtrl.push(NotificationPage);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }



  public items : Array<any> = [];
  public icibususuan : Array<any> = [];
  ic = "";
  count = 0;


  ionViewWillEnter() : void
  {
    this.count = 0;
    this.ic = window.localStorage.getItem('icnumber');
     this.load();
     //this.badge.set(this.count);
  }

  load() : void
  {
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/notification.php')
     .subscribe((data : any) =>
     {
        console.dir(data);
        this.items = data;

        this.icibususuan = this.items.map(items => items.icibususuan);
        for(let i = 0; i < this.items.length; i++){
          if(this.ic == this.icibususuan[i]){
            this.count = this.count + 1;
        }
      }

     },
     (error : any) =>
     {
        console.dir(error);
     });
    
  }




}
