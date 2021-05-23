import { PostService } from 'src/app/services/post.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.page.html',
  styleUrls: ['./module1.page.scss'],
})
export class Module1Page implements OnInit {

  subject:any;
  subjectID:any;
  post: any;
  constructor(private toastr: ToastController,private _route : ActivatedRoute, private router: Router,private auth:AuthService,private afs:AngularFirestore, private serv: PostService) { }

  ngOnInit() {
    this.subjectID = this._route.snapshot.paramMap.get('ref');

    //getting a single subject data
   
     this.subject = this.serv.getSubjectInfo(this.subjectID).subscribe((i) => {
      this.subject = i;
      console.log(this.subject);
    });

    this.serv
    .GetPosts()
    .snapshotChanges()
    .subscribe((action) => {
      //console.log(action);
      this.post = action; 
    });
    console.log('im here')

   
  }
  back(){
    this.router.navigate(['/home-page'])
  }
  toPosts(){
    this.router.navigate(['/post'])
  }
  

}
