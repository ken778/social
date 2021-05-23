import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { PostService } from 'src/app/services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.page.html',
  styleUrls: ['./module2.page.scss'],
})
export class Module2Page implements OnInit {
  postID:any;
  post:any;
  constructor(private toastr: ToastController,private _route : ActivatedRoute, private router: Router,private auth:AuthService,private afs:AngularFirestore, private serv: PostService) { }

  ngOnInit() {
    this.postID = this._route.snapshot.paramMap.get('ref');

    this.post = this.serv.getPost(this.postID).subscribe((i) => {
      this.post = i;
      console.log(this.post);
    });
  }
  back(){
    this.router.navigate(['/home-page'])
  }

}
