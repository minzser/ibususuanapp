import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the Searchibusudata2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchibusudata2',
  templateUrl: 'searchibusudata2.html',
})
export class Searchibusudata2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http   : HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewWillEnter() : void {


    if(this.dd<10) {
      this.d = '0'+this.dd
    } else {
      this.d = ''+this.dd;
    }
    
    if(this.mm<10) {
      this.m = '0'+this.mm
    }  else {
      this.m = ''+this.mm;
    }
  
    this.lolz = this.yyyy + '-' + this.m + '-' + this.d;

    if(this.navParams.get("record"))
    {
      this.selectEntry(this.navParams.get("record"));
    }
    this.load();
    this.loadreview();
    this.role = window.localStorage.getItem('role');
    if(this.role == "Parent"){
      this.canComment = "Yes";
   }
   this.loadanakkandung();
  }

  icnumber = "";
name = "";
city = "";
state ="";
telnum ="";
checking : any;
checking2 : any;
role = "";
canComment : any;
komenz = "";


public items : Array<any> = [];
  public items2 : Array<any> = [];
  public mykid : Array<any> = [];
  public cname : Array<any> = [];
  public icibususuan : Array<any> = [];
  public items3 : Array<any> = [];
  public items4 : Array<any> = [];
  public reviewid : Array<any> = [];
  public rname : Array<any> = [];
  public rdate : Array<any> = [];
  public review : Array<any> = [];
  public ricibususuan : Array<any> = [];
  public full : Array<any> = [];

  selectEntry(item : any) : void
   {
      this.icnumber = item.icnumber;
      this.name = item.name;
      this.city = item.city;
      this.state = item.state;
      this.telnum = item.telnum;
   }


   load() : void
   {
      this.http
      .get('https://icaremumsmilk.000webhostapp.com/viewchild.php')
      .subscribe((data : any) =>
      {
         console.dir(data);
         this.items = data;

         this.items2 = [];

        this.cname = this.items.map(items => items.name);
        this.mykid = this.items.map(items => items.mykid);
        this.icibususuan = this.items.map(items => items.icibususuan);
        this.full = this.items.map(items => items.full);
        for(let i = 0; i <= this.items.length; i++){
          if(this.icnumber == this.icibususuan[i] && this.full[i] > 4){
            this.items2.push({cname: this.cname[i], mykid: this.mykid[i]});
            this.checking = "yes";
          }
      }

 
      },
      (error : any) =>
      {
         console.dir(error);
      });
 
   }


   loadreview() : void
   {
      this.http
      .get('https://icaremumsmilk.000webhostapp.com/viewreview.php')
      .subscribe((data : any) =>
      {
         console.dir(data);
         this.items3 = data;

         this.items4 = [];

        this.reviewid = this.items3.map(items => items.reviewid);
        this.rname = this.items3.map(items => items.name);
        this.rdate = this.items3.map(items => items.date);
        this.review = this.items3.map(items => items.review);
        this.ricibususuan = this.items3.map(items => items.icibususuan);
        for(let i = 0; i <= this.items3.length; i++){
          if(this.icnumber == this.ricibususuan[i]){
            this.items4.push({name: this.rname[i], rdate: this.rdate[i], review: this.review[i]});
            this.checking2 = "yes";
          }
      }

 
      },
      (error : any) =>
      {
         console.dir(error);
      });
 
   }

   cnamez ="";
   creviewz ="";

   today = new Date();
   dd = this.today.getDate();
   mm = this.today.getMonth()+1; //January is 0!
   yyyy = this.today.getFullYear();
   
   lolz="";
   d="";
   m="";
   

   komen(){
      this.cnamez = window.localStorage.getItem('name');
     this.submitreview(this.cnamez, this.lolz, this.creviewz, this.icnumber);
   }


   private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";

   submitreview(name : string, date : string, review : string, icnumber : string) : void
      {
         let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
             options 	: any		= { "key" : "create", "name" : name, "date" : date, "review" : review, "icnumber" : icnumber},
             url       : any      	= this.baseURI + "submitreview.php";
   
         this.http.post(url, JSON.stringify(options), headers)
         .subscribe((data : any) =>
         {
             let alert = this.alertCtrl.create({
               title: 'BERJAYA',
               subTitle: 'Komen anda telah berjaya dihantar.',
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



      public items5 : Array<any> = [];
      public items6 : Array<any> = [];
      public imykid : Array<any> = [];
      public iname : Array<any> = [];
      public iparent : Array<any> = [];
      public iicparent : Array<any> = [];
      checking3 : any;

      loadanakkandung() : void
   {
      this.http
      .get('https://icaremumsmilk.000webhostapp.com/viewchildibusu.php')
      .subscribe((data : any) =>
      {
         console.dir(data);
         this.items5 = data;

         this.items6 = [];

        this.imykid = this.items5.map(items => items.mykid);
        this.iname = this.items5.map(items => items.name);
        this.iparent = this.items5.map(items => items.parent);
        this.iicparent = this.items5.map(items => items.icparent);
        for(let i = 0; i <= this.items5.length; i++){
          if(this.icnumber == this.iicparent[i]){
            this.items6.push({name: this.iname[i], mykid: this.imykid[i]});
            this.checking3 = "yes";
          }
      }

 
      },
      (error : any) =>
      {
         console.dir(error);
      });
 
   }


}
