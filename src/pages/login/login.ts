import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { AdminpagePage } from '../adminpage/adminpage';
import { UstazPage } from '../ustaz/ustaz';
import { GuestPage } from '../guest/guest';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public http   : HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController)
{

}

  public items : Array<any> = [];
  public icnumber : Array<any> = [];
  public pass : Array<any> = [];
  public name : Array<any> = [];
  public email : Array<any> = [];
  public role : Array<any> = [];
  public state : Array<any> = [];
  public city : Array<any> = [];
  public telnum : Array<any> = [];
  public available : Array<any> = [];
  public checkLogin : boolean = false;
  ic = "";
  password = "";
  rolez = "";

  login(){
    if(this.ic==""||this.password==""){
      let alert = this.alertCtrl.create({
        title: 'RALAT',
        subTitle: 'Sila masukkan nombor IC dan kata laluan.',
        buttons: ['OK']
      });
      alert.present();
     } else {
    this.icnumber = this.items.map(items => items.icnumber);
    this.pass = this.items.map(items => items.password);
    this.name = this.items.map(items => items.name);
    this.email = this.items.map(items => items.email);
    this.role = this.items.map(items => items.role);
    this.state = this.items.map(items => items.state);
    this.city = this.items.map(items => items.city);
    this.telnum = this.items.map(items => items.telnum);
    this.available = this.items.map(items => items.available);
    for(let i = 0; i <= this.items.length; i++){
      if(this.ic == this.icnumber[i] && this.password == this.pass[i]){
        this.checkLogin=true;
        this.rolez = this.role[i];
        window.localStorage.setItem('name', this.name[i]);
        window.localStorage.setItem('email', this.email[i]);
        window.localStorage.setItem('currentp', this.pass[i]);
        window.localStorage.setItem('role', this.role[i]);
        window.localStorage.setItem('state', this.state[i]);
        window.localStorage.setItem('telnum', this.telnum[i]);
        window.localStorage.setItem('available', this.available[i]);
        window.localStorage.setItem('city', this.city[i]);
        break;
      }
      else {
        this.checkLogin=false;
      }
  }

  if (this.checkLogin == true){
    this.presentLoadingDefault();
    window.localStorage.setItem('icnumber', this.ic);
    if(this.rolez == "Admin"){
      this.navCtrl.setRoot(AdminpagePage);
    } else if(this.rolez == "Ustaz"){
      this.navCtrl.setRoot(UstazPage);
    } 
    else {
      this.navCtrl.setRoot(HomePage);
    }
  } else {
    let alert = this.alertCtrl.create({
      title: 'RALAT',
      subTitle: 'Nombor IC atau kata laluan anda masukkan adalah salah!',
      buttons: ['OK']
    });
    alert.present();
  }
  }
}


  ionViewWillEnter() : void
  {
     this.load();
  }

  load() : void
  {
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/login.php')
     .subscribe((data : any) =>
     {
        console.dir(data);
        this.items = data;
     },
     (error : any) =>
     {
        console.dir(error);
     });
  }

  toRegister(){
    this.navCtrl.push(RegisterPage);
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Sila tunggu...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1500);
  }

  toCekData(){
    this.navCtrl.push(GuestPage);
  }

}