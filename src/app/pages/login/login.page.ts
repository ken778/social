import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password : string;

  constructor(private router: Router,private afs: AngularFirestore, private authent: AngularFireAuth, private auth : AuthService, private toastr : ToastController, private loadingCtrl : LoadingController) { }

  ngOnInit() {
  }
  async login(){
    if(this.email && this.password){
      const loading = await this.loadingCtrl.create({
        message: 'Please wait..',
        spinner: 'crescent',
        showBackdrop: true
      })
      loading.present();
      this.auth.login(this.email, this.password).then(()=>{
      
         loading.dismiss();
         this.router.navigate(['/home-page']);
      
      }).catch((error)=>{
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    }else{
      this.toast("Please enter your email and password", 'danger');
    }
  }
 
  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      cssClass: 'custom',
      position: 'bottom',
      color: status,
      duration: 2000
    })   
    toast.present();  
 
  }
  toRegister(){
   this.router.navigate(['/register'])
  }
  toForgotPassword(){
    this.router.navigate(['/forgot-password'])
  }

}
