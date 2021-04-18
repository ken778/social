import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;
  passwordMatch : boolean;

  constructor(private afs: AngularFirestore, private afauth: AngularFireAuth, private loadingCtrl: LoadingController, private toastr: ToastController, private router: Router) { }

  ngOnInit() {
  }

  async register(){
    if(this.email && this.password){
      const loading = await this.loadingCtrl.create({
        message: 'loading..',
        spinner: 'crescent',
        showBackdrop: true,

      })
      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email, this.password).then((data)=>{
        this.afs.collection('users').doc(data.user.uid).set({
          'userId' : data.user.uid,
          'email' : this.email,
          "name":"",
          'surname':"",
          'contact':"",
          'category':"",
      

        })
        data.user.sendEmailVerification()
      }).then(()=>{
        loading.dismiss();
        this.toast('registration Success!', 'success');
        this.router.navigate(['/login']);
      }).catch((error)=>{
        loading.dismiss();
        this.toast(error.message, 'danger');
      })
    }else{
      this.toast('Please Fill The Form!', 'danger');
    }
  }//end of register

  //checking if passwords match
  checkPassword(){
    if(this.password == this.confirmPassword){
      this.passwordMatch = true;
    }else{
      this.passwordMatch = false;
    }
  }

  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    })
    toast.present()
  }//end of toast
  tologin(){
    this.router.navigate(['/login'])
  }

}
