import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the RemoveustazPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-removeustaz',
  templateUrl: 'removeustaz.html',
})
export class RemoveustazPage {

  constructor(public navCtrl: NavController,
    public http   : HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController)
{

}

  public items : Array<any> = [];
  icnumberz = "";
  checkButton = "";


  viewEntry(param : any) : void
   {
     this.icnumberz = param;
      this.delete(this.icnumberz);
   }



  private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";


  delete(icnumber : string) : void
  {
     let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
         options 	: any		= { "key" : "remustaz", "icnumber" : icnumber},
         url       : any      	= this.baseURI + "removeustaz.php";

     this.http
     .post(url, JSON.stringify(options), headers)
     .subscribe(data =>
     {
        let alert = this.alertCtrl.create({
         title: 'BERJAYA',
         subTitle: 'Ustaz/Ustazah ini telah berjaya dipadam.',
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


  ionViewWillEnter() : void
  {
     this.load();

  }

  load() : void
  {
     this.http
     .get('https://icaremumsmilk.000webhostapp.com/viewustaz.php')
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
