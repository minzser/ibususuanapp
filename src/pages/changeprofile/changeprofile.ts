import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the ChangeprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changeprofile',
  templateUrl: 'changeprofile.html',
})
export class ChangeprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http   : HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  icnumber = "";
  name = "";
  currentp = "";
  email = "";
  role = "";
  state = "";
  city = "";
  telnum = "";
  available = "";
  oldpass = "";
  newpass = "";

  edit(){
    this.updateEntry(this.icnumber, this.name, this.city, this.state, this.telnum, this.email);
  }

  changepass(){
    if(this.oldpass == this.currentp){
      this.changePassword(this.icnumber, this.newpass);
    } else {
      let alert = this.alertCtrl.create({
        title: 'RALAT',
        subTitle: 'Kata laluan terkini salah.',
        buttons: ['OK']
      });
      alert.present();
    }
  }


  ionViewWillEnter() : void
  {
    this.icnumber = window.localStorage.getItem('icnumber');;
    this.name = window.localStorage.getItem('name');
    this.currentp = window.localStorage.getItem('currentp');
    this.email = window.localStorage.getItem('email');
    this.role = window.localStorage.getItem('role');
    this.state = window.localStorage.getItem('state');
    this.city = window.localStorage.getItem('city');
    this.telnum = window.localStorage.getItem('telnum');
    this.available = window.localStorage.getItem('available');

  }


  private baseURI : string  = "https://icaremumsmilk.000webhostapp.com/";


  updateEntry(icnumber : string, name : string, city : string, state : string, telnum : string, email : string ) : void
  {
     let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
         options 	: any		= { "key" : "update", "icnumber" : icnumber, "name" : name, "city" : city, "state" : state, "telnum" : telnum, "email" : email},
         url       : any      	= this.baseURI + "editprofile.php";

     this.http
     .post(url, JSON.stringify(options), headers)
     .subscribe(data =>
     {
      let alert = this.alertCtrl.create({
        title: 'BERJAYA',
        subTitle: 'Profil anda telah berjaya disunting.',
        buttons: ['OK']
      });
      alert.present();
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('city', city);
      window.localStorage.setItem('state', state);
      window.localStorage.setItem('telnum', telnum);
      window.localStorage.setItem('email', email);
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



  changePassword(icnumber : string, password : string) : void
  {
     let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
         options 	: any		= { "key" : "update", "icnumber" : icnumber, "password" : password},
         url       : any      	= this.baseURI + "changepass.php";

     this.http
     .post(url, JSON.stringify(options), headers)
     .subscribe(data =>
     {
      let alert = this.alertCtrl.create({
        title: 'BERJAYA',
        subTitle: 'Kata laluan anda telah berjaya ditukar.',
        buttons: ['OK']
      });
      alert.present();
      window.localStorage.setItem('currentp', password);
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
