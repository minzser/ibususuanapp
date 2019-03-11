import { Component } from '@angular/core';
import { NavParams, ViewController, IonicPage, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-ans-modal',
  templateUrl: 'ans-modal.html'
})
export class AnsModalPage {
  myParam: string;

  name="";
  date= new Date().getTime();
  datez : any;
  category="";
  answer="";
  questionid="";

  constructor(
    public http   : HttpClient, public viewCtrl: ViewController,
    params: NavParams, public alertCtrl: AlertController
  ) {
    this.myParam = params.get('myParam');
    this.questionid = window.localStorage.getItem('questionid');
  }

  ans(){
    this.name=window.localStorage.getItem('name');
    this.createEntry(this.name, this.datez, this.answer, this.questionid);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }



  private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";

createEntry(name : string, date : Date, answer : string, questionid : string) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "create", "name" : name, "date" : date, "answer" : answer, "questionid" : questionid},
          url       : any      	= this.baseURI + "answerquestion.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
          let alert = this.alertCtrl.create({
            title: 'BERJAYA',
            subTitle: 'Jawapan anda telah berjaya dihantar.',
            buttons: ['OK']
          });
          alert.present();
          this.dismiss();
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