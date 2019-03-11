import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the SearchavailablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchavailable',
  templateUrl: 'searchavailable.html',
})
export class SearchavailablePage {

  constructor(public http   : HttpClient, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchavailablePage');
  }


  public items : Array<any> = [];
  public items2 : Array<any> = [];

  public name : Array<any> = [];
  public telnum : Array<any> = [];
  public state : Array<any> = [];
  public city : Array<any> = [];
  public role : Array<any> = [];
  public available : Array<any> = [];
  public icnumber : Array<any> = [];

  statez = "";

  checkButton = "";
  confirmed = "";


  userrole = "";
  icparent = "";
  nameparent = "";
  telnumz = "";
  icibususuan = "";
  today = new Date();
  dd = this.today.getDate();
  mm = this.today.getMonth()+1; //January is 0!
  yyyy = this.today.getFullYear();
  
  lolz="";
  d="";
  m="";

  cari(){
    this.items2 = [];
    this.confirmed="no";
    this.checkButton = 'yes';
        this.name = this.items.map(items => items.name);
        this.telnum = this.items.map(items => items.telnum);
        this.state = this.items.map(items => items.state);
        this.city = this.items.map(items => items.city);
        this.role = this.items.map(items => items.role);
        this.available = this.items.map(items => items.available);
        this.icnumber = this.items.map(items => items.icnumber);
        for(let i = 0; i <= this.items.length; i++){
          if(this.statez == this.state[i] && this.role[i] == "IbuSusuan" && this.available[i] == "Yes"){
            this.items2.push({icnumber : this.icnumber[i], name: this.name[i], telnum: this.telnum[i], state: this.state[i], city: this.city[i]});
            this.confirmed="yes";
            this.icibususuan = this.icnumber[i];
          } else {
            if(this.confirmed == "yes"){
              this.confirmed="yes"
            } else {
              this.confirmed="no";
            }
          }
      }
  }

  help(){
    let alert = this.alertCtrl.create({
      title: 'INFORMASI',
      subTitle: 'Sila leret ke kiri pada informasi ibu susuan. Butang "Memberitahu" akan memberi notifikasi kepada dia bahawa anda ingin melantik dia sebagai ibu susuan.',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewWillEnter() : void
  {
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
    this.userrole = window.localStorage.getItem('role');
    this.icparent = window.localStorage.getItem('icnumber');
    this.nameparent = window.localStorage.getItem('name');
    this.telnumz = window.localStorage.getItem('telnum');
     this.load();
  }

  load() : void
  {
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/findibusu.php')
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

 
  notify(param : any){
    this.createEntry(this.lolz, this.icparent, this.nameparent, this.telnumz, param);
  }


  private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";

  createEntry(date : string, icparent : string, nameparent : string, telnum : string, icibususuan : string) : void
     {
        let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
            options 	: any		= { "key" : "create", "date" : date, "icparent" : icparent, "nameparent" : nameparent, "telnum" : telnum, "icibususuan" : icibususuan},
            url       : any      	= this.baseURI + "notify.php";
  
        this.http.post(url, JSON.stringify(options), headers)
        .subscribe((data : any) =>
        {
            let alert = this.alertCtrl.create({
              title: 'BERJAYA',
              subTitle: 'Notifikasi telah dihantar.',
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
