import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-assignchild',
  templateUrl: 'assignchild.html',
})
export class AssignchildPage {

  constructor(public navCtrl: NavController,
    public http   : HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController)
{

}

  public items : Array<any> = [];
  public items2 : Array<any> = [];
  public mykid : Array<any> = [];
  public name : Array<any> = [];
  public full : Array<any> = [];
  public parent : Array<any> = [];
  public icparent : Array<any> = [];
  public ibususuan : Array<any> = [];
  public checkLogin : boolean = false;
  mykidz = "";
  checkButton = "";
  user = "";
  namaibusu ="";

  newmykid = "";
  newname = "";
  newparent = "";
  newicparent = "";

  cari(){
    this.checkButton = 'yes';

    this.newmykid = "";
    this.newname = "";
    this.newparent = "";

    this.mykid = this.items.map(items => items.mykid);
        this.name = this.items.map(items => items.name);
        this.full = this.items.map(items => items.full);
        this.parent = this.items.map(items => items.parent);
        this.icparent = this.items.map(items => items.icparent);
        this.ibususuan = this.items.map(items => items.ibususuan);
        for(let i = 0; i <= this.items.length; i++){
          if(this.mykidz == this.mykid[i]){
            this.newmykid = this.mykid[i];
            this.newname = this.name[i];
            this.newparent = this.parent[i];
            this.newicparent = this.icparent[i];
            break;
          }
      }
  }

  assign(){
    this.updateEntry(this.newmykid, this.namaibusu, this.user);
  }


  help(){
    let alert = this.alertCtrl.create({
      title: 'INFORMASI',
      subTitle: 'Sila leret ke kiri pada informasi anak untuk melihat pilihan untuk mendaftar.',
      buttons: ['OK']
    });
    alert.present();
  }




  private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";
  //private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";

  updateEntry(mykid : string, ibususuan : string, icibususuan : string) : void
  {
     let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
         options 	: any		= { "key" : "update", "mykid" : mykid, "ibususuan" : ibususuan, "icibususuan" : icibususuan},
         url       : any      	= this.baseURI + "assign.php";

     this.http
     .post(url, JSON.stringify(options), headers)
     .subscribe(data =>
     {
        let alert = this.alertCtrl.create({
         title: 'BERJAYA',
         subTitle: 'Anda telah mendaftar untuk menjadi ibu susuan kepada bayi ini.',
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


  ionViewWillEnter() : void
  {
     this.load();
     this.user = window.localStorage.getItem('icnumber');
     this.namaibusu = window.localStorage.getItem('name');

  }

  load() : void
  {
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/viewchild.php')
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


}
