import { Component } from '@angular/core';
import { NavParams, ViewController, IonicPage, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-hint-modal',
  templateUrl: 'hint-modal.html'
})
export class HintModalPage {
  myParam: string;

  name="";
  date= new Date().getTime();
  datez : any;
  category="";
  question="";

  constructor(
    public http   : HttpClient, public viewCtrl: ViewController,
    params: NavParams, public alertCtrl: AlertController
  ) {
    this.myParam = params.get('myParam');
  }

  ask(){
    this.name=window.localStorage.getItem('name');
    this.createEntry(this.name, this.datez, this.category, this.question);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }



  private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";

createEntry(name : string, date : Date, category : string, question : string) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "create", "name" : name, "date" : date, "category" : category, "question" : question},
          url       : any      	= this.baseURI + "askquestion.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
          let alert = this.alertCtrl.create({
            title: 'BERJAYA',
            subTitle: 'Soalan anda telah berjaya dihantar. Sila tunggu ustaz/ustazah untuk menjawab soalan anda.',
            buttons: ['OK']
          });
          alert.present();
          this.dismiss();
      },
      (error : any) =>
      {
        let alert = this.alertCtrl.create({
          title: 'RALAT',
          subTitle: 'Soalan tidak berjaya dihantar. Sila cuba sekali lagi.',
          buttons: ['OK']
        });
        alert.present();
      });
   }


}