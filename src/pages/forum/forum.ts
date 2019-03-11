import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AnswerPage } from '../answer/answer';

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

  constructor(public http   : HttpClient, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  openHintModal() {
    this.openModal('HintModalPage');
  }

  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
                  .present();
  }

  cards = [];


  public items : Array<any> = [];
  public name : Array<any> = [];
  public category : Array<any> = [];
  public question : Array<any> = [];
  public date : Array<any> = [];
  public questionid : Array<any> = [];
  public icnumber : Array<any> = [];
  role = "";
  canAsk : any;
  canDelete : any;
  queic = "";

  
  ionViewWillEnter() : void
  {
    this.cards = [];
     this.load();
     this.role = window.localStorage.getItem('role');
     this.queic = window.localStorage.getItem('icnumber');
     if(this.role == "IbuSusuan"|| this.role == "Parent"){
        this.canAsk = "Yes";
     }
     if(this.role == "Admin"){
      this.canDelete = "Yes";
   }
  }

  load() : void
  {
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/questions.php')
     .subscribe((data : any) =>
     {
        console.dir(data);
        this.items = data;

        this.name = this.items.map(items => items.name);
        this.date = this.items.map(items => items.date);
        this.category = this.items.map(items => items.category);
        this.question = this.items.map(items => items.question);
        this.questionid = this.items.map(items => items.questionid);
        this.icnumber = this.items.map(items => items.icnumber);
        for(let i = 0; i < this.items.length; i++){
            this.cards.push({name: this.name[i], icnumber: this.icnumber[i], date: this.date[i], category: this.category[i], question: this.question[i], questionid : this.questionid[i]});
        }
      

     },
     (error : any) =>
     {
        console.dir(error);
     });
    
  }


  viewEntry(param : any) : void
   {
      this.navCtrl.push(AnswerPage, param);
   }

   delete(param : any) : void
   {
      this.deletez(param);
   }


   
  private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";


  deletez(questionid : string) : void
  {
     let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
         options 	: any		= { "key" : "remquest", "questionid" : questionid},
         url       : any      	= this.baseURI + "removequestion.php";

     this.http
     .post(url, JSON.stringify(options), headers)
     .subscribe(data =>
     {
        let alert = this.alertCtrl.create({
         title: 'BERJAYA',
         subTitle: 'Soalan ini telah berjaya dipadam.',
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