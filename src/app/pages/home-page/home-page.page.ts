import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
 
  subject:any;
  constructor(private afs: AngularFirestore,public _data: PostService, private auth:AuthService, public _route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.auth.LogedUser().subscribe(res=>{
      res.uid
      
      this.afs.collection('Subjects',ref=> ref.where('id_student','==',res.uid)).valueChanges({idField: 'id'}).subscribe(dat=>{
        console.log(dat);
        this.subject=dat;
      })

 
      
    
    }) 
  }
  toModule1(){
    this.router.navigate(['/module1'])
  }
  toprofile(){
    this.router.navigate(['/profile'])
  }

}
