import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  constructor(public http   : HttpClient,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  cards = [];


  public items : Array<any> = [];
  public notid : Array<any> = [];
  public icparent : Array<any> = [];
  public namaparent : Array<any> = [];
  public telnum : Array<any> = [];
  public icibususuan : Array<any> = [];
  public date : Array<any> = [];
  ic = "";

  ionViewWillEnter() : void
  {
    this.cards = [];
    this.ic = window.localStorage.getItem('icnumber');
     this.load();
  }

  //https://icaremumsmilk.000webhostapp.com/questions.php
  load() : void
  {
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/notification.php')
     .subscribe((data : any) =>
     {
        console.dir(data);
        this.items = data;

        this.notid = this.items.map(items => items.notid);
        this.date = this.items.map(items => items.date);
        this.icparent = this.items.map(items => items.icparent);
        this.namaparent = this.items.map(items => items.nameparent);
        this.telnum = this.items.map(items => items.telnum);
        this.icibususuan = this.items.map(items => items.icibususuan);
        for(let i = 0; i < this.items.length; i++){
          if(this.ic == this.icibususuan[i]){
            this.cards.push({namaparent: this.namaparent[i], telnum: this.telnum[i], date: this.date[i], notid : this.notid[i]});
        }
      }

     },
     (error : any) =>
     {
        console.dir(error);
     });
    
  }





  delete(param : any) : void
   {
      this.deletez(param);
   }


   
  //private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";
  private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";

  deletez(notid : string) : void
  {
     let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
         options 	: any		= { "key" : "remquest", "notid" : notid},
         url       : any      	= this.baseURI + "removenoti.php";

     this.http
     .post(url, JSON.stringify(options), headers)
     .subscribe(data =>
     {
        let alert = this.alertCtrl.create({
         title: 'BERJAYA',
         subTitle: 'Notifikasi ini telah berjaya dipadam.',
         buttons: ['OK']
       });
       alert.present();
     },
     (error : any) =>
     {
       let alert = this.alertCtrl.create({
         title: 'RALAT',
         subTitle: 'Sila cuba sekali lagi.',
         buttons: ['OK']
       });
       alert.present();
     });
  }

}
