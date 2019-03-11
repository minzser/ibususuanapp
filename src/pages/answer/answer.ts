import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html',
})
export class AnswerPage {

  constructor(public http   : HttpClient, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() : void {
    this.cards = [];
    if(this.navParams.get("record"))
    {
      this.selectEntry(this.navParams.get("record"));
    }
    this.load();

    this.role = window.localStorage.getItem('role');
    if(this.role == "Ustaz"){
      this.canAnswer = "Yes";
   }
  }

  openHintModal() {
    window.localStorage.setItem('questionid', this.qid);
    this.openModal('AnsModalPage');
  }

  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
                  .present();
  }

  role = "";
  qname = "";
  qdate = "";
  qcategory = "";
  qquestion = "";
  qid = "";
  canAnswer : any;
  public fullz : any;
  public items : Array<any> = [];
  public cards : Array<any> = [];
  public name : Array<any> = [];
  public date : Array<any> = [];
  public answer : Array<any> = [];
  public questionid : Array<any> = [];
  public check;
  
  selectEntry(item : any) : void
    {
      this.qname = item.name;
      this.qdate = item.date;
      this.qcategory=item.category;
      this.qquestion = item.question;
      this.qid = item.questionid;
    }



    load() : void
  {
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/answers.php')
     .subscribe((data : any) =>
     {
        console.dir(data);
        this.items = data;

        this.name = this.items.map(items => items.name);
        this.date = this.items.map(items => items.date);
        this.answer = this.items.map(items => items.answer);
        this.questionid = this.items.map(items => items.questionid);
        for(let i = 0; i < this.items.length; i++){
          if(this.qid == this.questionid[i]){
            this.cards.push({name: this.name[i], date: this.date[i], answer: this.answer[i]});
            this.check = 'Yes';
          }
        }
      

     },
     (error : any) =>
     {
        console.dir(error);
     });
    
  }
  

}
