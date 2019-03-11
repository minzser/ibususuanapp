import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Searchibusudata2Page } from '../searchibusudata2/searchibusudata2';

/**
 * Generated class for the SearchibusudataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchibusudata',
  templateUrl: 'searchibusudata.html',
})
export class SearchibusudataPage {

  constructor(public navCtrl: NavController,
    public http   : HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController)
{

}
  public items : Array<any> = [];
  public items2 : Array<any> = [];
  public icnumber : Array<any> = [];
  public name : Array<any> = [];
  public city : Array<any> = [];
  public state : Array<any> = [];
  public telnum : Array<any> = [];

  ic = "";
  checkButton = "";

  newic = "";
  newname = "";

  cari(){
    this.items2 = [];
    this.checkButton = 'yes';

    this.newic = "";
    this.newname = "";

        this.icnumber = this.items.map(items => items.icnumber);
        this.name = this.items.map(items => items.name);
        this.city = this.items.map(items => items.city);
        this.state = this.items.map(items => items.state);
        this.telnum = this.items.map(items => items.telnum);
        for(let i = 0; i <= this.items.length; i++){
          if(this.ic == this.icnumber[i]){
            this.newic = this.icnumber[i];
            this.newname = this.name[i];
            this.items2.push({icnumber: this.icnumber[i], name: this.name[i], city: this.city[i], state: this.state[i], telnum: this.telnum[i]});
            break;
          }
      }
  }

  viewEntry(param : any) : void
   {
      this.navCtrl.push(Searchibusudata2Page, param);
   }


  private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";

  ionViewWillEnter() : void
  {
     this.load();

  }

  load() : void
  {
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/viewibusu.php')
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
