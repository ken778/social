import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  details:any;

  constructor(private  database: AngularFirestore, private auth : AuthService,private router:Router) { }

  ngOnInit() {
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

}
