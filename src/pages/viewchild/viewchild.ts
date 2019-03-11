import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ViewbabyPage } from '../viewbaby/viewbaby';

@IonicPage()
@Component({
  selector: 'page-viewchild',
  templateUrl: 'viewchild.html',
})
export class ViewchildPage {

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
  public ibususuan : Array<any> = [];
  public icibususuan : Array<any> = [];
  public icparent : Array<any> = [];
  public checkLogin : boolean = false;
  username = "";

 

  ionViewWillEnter() : void
  {
    this.username = window.localStorage.getItem('icnumber');
     this.load();
  }

  load() : void
  {
    this.items2 = []; 
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/viewchild.php')
     .subscribe((data : any) =>
     {
        console.dir(data);
        this.items = data;

        this.mykid = this.items.map(items => items.mykid);
        this.name = this.items.map(items => items.name);
        this.full = this.items.map(items => items.full);
        this.parent = this.items.map(items => items.parent);
        this.icparent = this.items.map(items => items.icparent);
        this.ibususuan = this.items.map(items => items.ibususuan);
        this.icibususuan = this.items.map(items => items.icibususuan);
        for(let i = 0; i <= this.items.length; i++){
          if(this.username == this.icparent[i]){
            this.items2.push({mykid: this.mykid[i], name: this.name[i], full: this.full[i], ibususuan: this.ibususuan[i], icibususuan: this.icibususuan[i]});
          }
      }

     },
     (error : any) =>
     {
        console.dir(error);
     });

  }

  viewEntry(param : any) : void
   {
      this.navCtrl.push(ViewbabyPage, param);
   }


}
