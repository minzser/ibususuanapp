import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-registerchild',
  templateUrl: 'registerchild.html'
})
export class RegisterchildPage {

   public items : Array<any> = [];

   constructor(public navCtrl: NavController,
               public http   : HttpClient, public alertCtrl: AlertController)
   {
   }

   mykid="";
   name="";
   parent="";
   namaparent="";
   public termsnc;

   signup() {
      if(this.mykid==""||this.name==""){

        let alert = this.alertCtrl.create({
          title: 'ERROR',
          subTitle: 'Sila isi semua maklumat.',
          buttons: ['OK']
        });
        alert.present();

      } else if (this.mykid!=""&&this.name!="") {
        this.parent=window.localStorage.getItem('icnumber');
        this.namaparent = window.localStorage.getItem('name');

          this.createEntry(this.mykid, this.name, this.namaparent, this.parent);
        
  }

}

private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";

createEntry(mykid : string, name : string, namaparent: string, parent : string) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "create", "mykid" : mykid, "name" : name, "namaparent" : namaparent, "parent" : parent},
          url       : any      	= this.baseURI + "registerchild.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
          let alert = this.alertCtrl.create({
            title: 'BERJAYA',
            subTitle: 'Pendaftaran anak berjaya!',
            buttons: ['OK']
          });
          alert.present();
      },
      (error : any) =>
      {
        let alert = this.alertCtrl.create({
          title: 'RALAT',
          subTitle: 'Bayi ini mungkin sudah didaftar dalam aplikasi. Sila cuba sekali lagi.',
          buttons: ['OK']
        });
        alert.present();
      });
   }

}