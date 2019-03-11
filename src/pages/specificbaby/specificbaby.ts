import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController} from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the SpecificbabyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-specificbaby',
  templateUrl: 'specificbaby.html',
})
export class SpecificbabyPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public http   : HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecificbabyPage');
  }


  ionViewWillEnter() : void {
    if(this.navParams.get("record"))
    {
      this.selectEntry(this.navParams.get("record"));
    }
  }

mykid = "";
name = "";
full = "";
parent = "";
public fullz : any;

  selectEntry(item : any) : void
   {
      this.mykid = item.mykid;
      this.name = item.name;
      this.full=item.full;
      this.parent = item.parent;
      this.fullz = parseInt(this.full);
   }

   tambahkenyang(){
     this.updateEntry(this.mykid);
     
   }




   private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";


  updateEntry(mykid : string) : void
  {
     let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
         options 	: any		= { "key" : "update", "mykid" : mykid},
         url       : any      	= this.baseURI + "tambahkenyang.php";

     this.http
     .post(url, JSON.stringify(options), headers)
     .subscribe(data =>
     {
        let alert = this.alertCtrl.create({
         title: 'BERJAYA',
         subTitle: 'Bilangan bayi kenyang telah ditambah!',
         buttons: ['OK']
       });
       this.fullz++;
       alert.present();
     },
     (error : any) =>
     {
       let alert = this.alertCtrl.create({
         title: 'RALAT',
         subTitle: 'Masalah sistem. Sila cuba sekali lagi.',
         buttons: ['OK']
       });
       alert.present();
     });
  }


}
