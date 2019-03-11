import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

   public items : Array<any> = [];

   constructor(public navCtrl: NavController,
               public http   : HttpClient, public alertCtrl: AlertController)
   {
   }

   ic="";
   name="";
   email="";
   password="";
   vpassword="";
   role="";
   city="";
   state="";
   telnum="";

   signup() {
      if(this.ic==""||this.name==""||this.email==""||this.password==""||this.vpassword==""||this.role==""||this.city==""||this.state==""||this.telnum==""){

        let alert = this.alertCtrl.create({
          title: 'RALAT',
          subTitle: 'Sila isi semua maklumat.',
          buttons: ['OK']
        });
        alert.present();

      } else if (this.ic!=""&&this.name!=""&&this.email!=""&&this.password!=""&&this.vpassword!=""&&this.role!=""&&this.city!=""&&this.state!=""&&this.telnum!="") {

        if(!this.email.includes("@")){
          let alert = this.alertCtrl.create({
            title: 'RALAT',
            subTitle: 'Sila isi emel yang betul.',
            buttons: ['OK']
          });
          alert.present();
        } else {

      if(this.password==this.vpassword){
        if(this.ic.length==12){
        if(this.password.length>7){
          this.createEntry(this.ic, this.name, this.password, this.email, this.role,this.city, this.state, this.telnum);
        
      } else {
        let alert = this.alertCtrl.create({
          title: 'Kata Laluan Lemah',
          subTitle: 'Pastikan kata laluan anda melebihi 7 huruf.',
          buttons: ['OK']
        });
        alert.present();
        }
      } else {
        let alert = this.alertCtrl.create({
          title: 'RALAT',
          subTitle: 'Nombor IC mempunyai 12 nombor.',
          buttons: ['OK']
        });
        alert.present();
      }
        
  }
  else {
    let alert = this.alertCtrl.create({
      title: 'RALAT',
      subTitle: 'Anda meletakkan kata laluan yang tidak sepadan.',
      buttons: ['OK']
    });
    alert.present();
  }
      } 
      }

}


regUstaz(){
  let alert = this.alertCtrl.create({
    title: 'PENDAFTARAN',
    subTitle: 'Untuk mendaftar sebagai Ustaz/Ustazah, sila berhubung dengan admin bersertakan sijil atau transkrip sebagai bukti.<br><br>Email: syarilla@unisza.edu.my',
    buttons: ['OK']
  });
  alert.present();
}


private baseURI               : string  = "https://icaremumsmilk.000webhostapp.com/";

createEntry(icnumber : string, name : string, password : string, email : string, role : string, city : string, state : string, telnum : string) : void
   {
      let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
          options 	: any		= { "key" : "create", "icnumber" : icnumber, "password" : password, "name" : name, "email" : email, "role" : role, "city" : city, "state" : state, "telnum" : telnum},
          url       : any      	= this.baseURI + "register.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
          let alert = this.alertCtrl.create({
            title: 'BERJAYA',
            subTitle: 'Pendaftaran akaun berjaya!<br>Sila log masuk.',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.push(LoginPage);
      },
      (error : any) =>
      {
        let alert = this.alertCtrl.create({
          title: 'RALAT',
          subTitle: 'Nombor IC anda sudah terdaftar di dalam sistem.',
          buttons: ['OK']
        });
        alert.present();
      });
   }

   toLogin(){
     this.navCtrl.push(LoginPage);
   }

   tnc(){
    let alert = this.alertCtrl.create({
      title: 'Terma dan Syarat',
      subTitle: '1. Kami tidak bertanggungjawab ke atas kehilangan akaun anda. Sila jaga akaun anda sebaiknya dengan tidak memberi password kepada orang lain.<br><br>2. Aplikasi ini memerlukan sambungan internet. Oleh itu, internet data anda akan digunakan untuk mengakses aplikasi ini.',
      buttons: ['OK']
    });
    alert.present();
   }

}