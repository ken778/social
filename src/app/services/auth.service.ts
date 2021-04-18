import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

import {firebase} from '@firebase/app'
import '@firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth:AngularFireAuth, private afs: AngularFirestore, private router: Router, private loadingCtrl: LoadingController, private toastr: ToastController) { }
  
   //current user
   LogedUser(){
    return this.afauth.authState;
  }
  

  async login(email, pass){
    const loading = await this.loadingCtrl.create({
      message: 'Authenticating..',
      spinner: 'crescent',
      showBackdrop: true
    })
     
    loading.present();

    this.afauth.signInWithEmailAndPassword(email,pass).then((data)=>{
      if(!data.user.emailVerified)
      {
        loading.dismiss();
        this.toast('Please verify your email', 'danger');
        this.logout();
      }
    })
    loading.dismiss();
  }//end of login

  //logout
  logout(){
    this.afauth.signOut().then(()=>{
      this.router.navigate(['/sign-up']);
    })
  }

  async toast(message, status){
    const toast = await this.toastr.create({
      message:message,
      position: 'top',
      color:status,
      duration: 2000
    })

    toast.present();
  }// end of toast
 
  Googlelogin(){
   let provider = new firebase.auth.GoogleAuthProvider();
   this.afauth.signInWithPopup(provider).then(()=>{
     this.toast("Authenticated","success")
     this.router.navigate(['/feed'])
   }).catch((err)=>{
     console.log('err',err.message);
   })
 }

  //get users from collection
  GetUsers() {
   return this.afs.collection('users');
 }
}
