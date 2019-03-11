import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the AddustazPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addustaz',
  templateUrl: 'addustaz.html',
})
export class AddustazPage {

    constructor(public navCtrl: NavController,
      public http   : HttpClient, public alertCtrl: AlertController)
  {
  }

  ic="";
  name="";
  email="";
  password="";
  role="Ustaz";
  state="";
  city="";
  telnum="";
  public termsnc;

  signup() {
  if(this.ic==""||this.name==""||this.email==""||this.password==""||this.role==""){

  let alert = this.alertCtrl.create({
  title: 'RALAT',
  subTitle: 'Sila isi semua maklumat.',
  buttons: ['OK']
  });
  alert.present();

  } else if (this.ic!=""&&this.name!=""&&this.email!=""&&this.password!="") {

  if(!this.email.includes("@")){
  let alert = this.alertCtrl.create({
  title: 'RALAT',
  subTitle: 'Sila isi emel yang betul.',
  buttons: ['OK']
  });
  alert.present();
  } else {

  if(this.ic.length==12){
  if(this.password.length>7){
  this.createEntry(this.ic, this.name, this.password, this.email, this.state, this.city, this.telnum, this.role);
 
  } else {
  let alert = this.alertCtrl.create({
  title: 'Kata Laluan Lemah',
  subTitle: 'Pastikan kata laluan anda melebihi 7 huruf.',
  buttons: ['OK']
  });
  alert.present();
  }
  } else {
  let alert = this.alertCtrl.create({
  title: 'RALAT',
  subTitle: 'Nombor IC mempunyai 12 nombor.',
  buttons: ['OK']
  });
  alert.present();
  }

 
  } 
  }

  }

  private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";

  createEntry(icnumber : string, name : string, password : string, email : string, state : string, city : string, telnum : string, role : string) : void
  {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
      options 	: any		= { "key" : "create", "icnumber" : icnumber, "password" : password, "name" : name, "email" : email, "role" : role, "state" : state, "city" : city, "telnum" : telnum},
      url       : any      	= this.baseURI + "register.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
      let alert = this.alertCtrl.create({
      title: 'BERJAYA',
      subTitle: 'Pendaftaran akaun Ustaz/Ustazah berjaya!',
      buttons: ['OK']
      });
      alert.present();
      },
      (error : any) =>
      {
      let alert = this.alertCtrl.create({
      title: 'RALAT',
      subTitle: 'Nombor IC sudah terdaftar di dalam sistem.',
      buttons: ['OK']
      });
      alert.present();
      });
  }


}
