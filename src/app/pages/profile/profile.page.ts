import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { AuthService } from 'src/app/services/auth.service';


export interface imageData{
  fileName:string;
  filePath:string;
  size: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  details:any;
  fileName:string;
  fileSize:string;
  isLoaded:Boolean;
  isLoading:boolean;
  private imageCollection:AngularFirestoreCollection<ImageData>

  constructor(private  database: AngularFirestore, private auth : AuthService,private router:Router,private storage: AngularFireStorage ) { }

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
  edit(){
    this.router.navigate(['/edit-profile'])
  }
  Topost(){
    this.router.navigate(['/post'])
  }
  ToHome(){
    this.router.navigate(['/feed'])
  }
  logout(){
    this.auth.logout();
  }


 

}
