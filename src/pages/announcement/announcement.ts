import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-announcement',
  templateUrl: 'announcement.html',
})
export class AnnouncementPage {

  constructor(public alertCtrl: AlertController,public http   : HttpClient, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  openHintModal() {
    if(this.checking=="no"){
    this.openModal('AnnModalPage');
  } else {
    let alert = this.alertCtrl.create({
      title: 'RALAT',
      subTitle: 'Anda hanya boleh membuat 1 pengumuman sehari.',
      buttons: ['OK']
    });
    alert.present();
  }
  }

  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
                  .present();
  }

  cards = [];


  public items : Array<any> = [];
  public name : Array<any> = [];
  public icnumber : Array<any> = [];
  public date : Array<any> = [];
  public anid : Array<any> = [];
  public announcement : Array<any> = [];

  
  checkdate= new Date().getTime();
  datez : any;
  checking = "no";
  icnum="";

  today = new Date();
dd = this.today.getDate();
mm = this.today.getMonth()+1; //January is 0!
yyyy = this.today.getFullYear();

lolz="";
d="";
m="";

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

    this.cards = [];
     this.load();
     this.icnum=window.localStorage.getItem('icnumber');
  }

  load() : void
  {
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/announcement.php')
     .subscribe((data : any) =>
     {
        console.dir(data);
        this.items = data;

        this.name = this.items.map(items => items.name);
        this.date = this.items.map(items => items.date);
        this.announcement = this.items.map(items => items.announcement);
        this.anid = this.items.map(items => items.anid);
        this.icnumber = this.items.map(items => items.icnumber);
        for(let i = 0; i < this.items.length; i++){
            this.cards.push({anid : this.anid[i], name: this.name[i], date: this.date[i], announcement: this.announcement[i], icnumber : this.icnumber[i]});
            if(this.lolz == this.date[i] && this.icnum == this.icnumber[i]){
              this.checking = "yes";
            }
        }
      

     },
     (error : any) =>
     {
        console.dir(error);
     });
    
  }


  private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";


  deletez(anid : string) : void
  {
     let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
         options 	: any		= { "key" : "remquest", "anid" : anid},
         url       : any      	= this.baseURI + "removeannounce.php";

     this.http
     .post(url, JSON.stringify(options), headers)
     .subscribe(data =>
     {
        let alert = this.alertCtrl.create({
         title: 'BERJAYA',
         subTitle: 'Pengumuman ini telah berjaya dipadam.',
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
