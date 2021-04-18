import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  LastName:any;
  contact:any;
  category:any;
  Fname:any;
  

   details:any;
   email:any;
   customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
   customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
   customPickerOptions: any;
 
  constructor(private  database: AngularFirestore, private auth : AuthService,private router:Router, private toastr: ToastController) { 
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
    
  }
 
  ngOnInit() {
    //getting details of a current loged in user
    this.auth.LogedUser().subscribe(res=>{
      res.uid
      this.auth.GetUsers().doc(res.uid).snapshotChanges().subscribe(element=>{
        //console.log(element);
        this.details = element;
        //console.log(res.uid);
      
      })
      this.database.collection('users').doc(res.uid).valueChanges().subscribe(data=>{
       console.log(data);
        this.details=data;
      })

       
    }) 


  }
  update(){
     this.auth.LogedUser().subscribe(res=>{
       this.auth.GetUsers().doc(res.uid).set({
         'email':this.email,
        "name":this.Fname,
        'surname':this.LastName,
        'contact':this.contact,
        

       }).then(()=>{
      this.toast("Details updated successfuy","success")
       }).catch(error=>{
        this.toast("something went wrong","danger!")
       })
     })
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

  toProfile(){
    this.router.navigate(['/profile'])
  }
}
