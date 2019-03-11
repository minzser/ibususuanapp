import { Component } from '@angular/core';
import { NavParams, ViewController, IonicPage, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-ann-modal',
  templateUrl: 'ann-modal.html'
})
export class AnnModalPage {
  myParam: string;

  name="";
  icnumber="";
  date= new Date().getTime();
  datez : any;
  announcement="";

  constructor(
    public http   : HttpClient, public viewCtrl: ViewController,
    params: NavParams, public alertCtrl: AlertController
  ) {
    this.myParam = params.get('myParam');
  }

  ask(){
    this.name=window.localStorage.getItem('name');
    this.icnumber=window.localStorage.getItem('icnumber');
    this.createEntry(this.name, this.datez, this.icnumber, this.announcement);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }



  private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";

createEntry(name : string, date : Date, icnumber : string, announcement : string) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "create", "name" : name, "icnumber" : icnumber, "date" : date, "announcement" : announcement},
          url       : any      	= this.baseURI + "announce.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
          let alert = this.alertCtrl.create({
            title: 'BERJAYA',
            subTitle: 'Anda telah berjaya membuat pengumuman.',
            buttons: ['OK']
          });
          alert.present();
          this.dismiss();
      },
      (error : any) =>
      {
        let alert = this.alertCtrl.create({
          title: 'RALAT',
          subTitle: 'Pengumuman anda tidak berjaya dihantar. Sila cuba sekali lagi.',
          buttons: ['OK']
        });
        alert.present();
      });
   }


}