import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Searchchilddata2Page } from '../searchchilddata2/searchchilddata2';

/**
 * Generated class for the SearchchilddataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchchilddata',
  templateUrl: 'searchchilddata.html',
})
export class SearchchilddataPage {

  constructor(public navCtrl: NavController,
    public http   : HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController)
{

}

  public items : Array<any> = [];
  public items2 : Array<any> = [];
  public mykid : Array<any> = [];
  public name : Array<any> = [];
  public full : Array<any> = [];
  public parent : Array<any> = [];
  public icparent : Array<any> = [];
  public ibususuan : Array<any> = [];
  public icibususuan : Array<any> = [];

  mykidz = "";
  checkButton = "";

  newmykid = "";
  newname = "";
  newparent = "";
  newicparent = "";

  cari(){
    this.items2 = [];
    this.checkButton = 'yes';

    this.newmykid = "";
    this.newname = "";
    this.newparent = "";

    this.mykid = this.items.map(items => items.mykid);
        this.name = this.items.map(items => items.name);
        this.full = this.items.map(items => items.full);
        this.parent = this.items.map(items => items.parent);
        this.icparent = this.items.map(items => items.icparent);
        this.ibususuan = this.items.map(items => items.ibususuan);
        this.icibususuan = this.items.map(items => items.icibususuan);
        for(let i = 0; i <= this.items.length; i++){
          if(this.mykidz == this.mykid[i]){
            this.newmykid = this.mykid[i];
            this.newname = this.name[i];
            this.newparent = this.parent[i];
            this.newicparent = this.icparent[i];
            this.items2.push({mykid: this.mykid[i], name: this.name[i], parent: this.parent[i], icparent: this.icparent[i], ibususuan: this.ibususuan[i], icibususuan : this.icibususuan[i], full : this.full[i]});
            break;
          }
      }
  }

  viewEntry(param : any) : void
   {
      this.navCtrl.push(Searchchilddata2Page, param);
   }


  private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";

  ionViewWillEnter() : void
  {
     this.load();

  }

  load() : void
  {
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/viewchild.php')
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
