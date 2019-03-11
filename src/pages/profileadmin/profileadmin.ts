import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeprofilePage } from '../changeprofile/changeprofile';

@IonicPage()
@Component({
  selector: 'page-profileadmin',
  templateUrl: 'profileadmin.html',
})
export class ProfileadminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http   : HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  public status: boolean;
  icnumber = "";
  name = "";
  cpass = "";
  email = "";
  role = "";
  state = "";
  city = "";
  telnum = "";
  available = "";

  toggle(){
    if(this.status == true){
      window.localStorage.setItem('available', "Yes");
      this.updateEntry(this.icnumber, "Yes");
    } else {
      window.localStorage.setItem('available', "No");
      this.updateEntry(this.icnumber, "No");
    }
  }

  edit(){
    this.navCtrl.push(ChangeprofilePage);
  }


  ionViewWillEnter() : void
  {
    this.icnumber = window.localStorage.getItem('icnumber');;
    this.name = window.localStorage.getItem('name');
    this.cpass = window.localStorage.getItem('cpass');
    this.email = window.localStorage.getItem('email');
    this.role = window.localStorage.getItem('role');
    this.state = window.localStorage.getItem('state');
    this.city = window.localStorage.getItem('city');
    this.telnum = window.localStorage.getItem('telnum');
    this.available = window.localStorage.getItem('available');

    if(this.available == "Yes"){
      this.status = true;
    } else {
      this.status = false;
    }
  }


  
  private baseURI : string  = "https://icaremumsmilk.000webhostapp.com/";


  updateEntry(icnumber : string, status : string) : void
  {
     let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
         options 	: any		= { "key" : "update", "icnumber" : icnumber, "status" : status},
         url       : any      	= this.baseURI + "updateavailability.php";

     this.http
     .post(url, JSON.stringify(options), headers)
     .subscribe(data =>
     {
     },
     (error : any) =>
     {
     });
  }



}
