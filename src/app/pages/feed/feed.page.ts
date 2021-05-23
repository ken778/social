import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  
  likes = 0;
  likes2 = 0;
  post:any;
  postID:string;
  posts:any;

 Ref:any;
 po:any;
  constructor(private afs: AngularFirestore,public _data: PostService, private auth:AuthService, public _route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
     /* //get post id
     this.Ref = this._route.snapshot.paramMap.get('ref');
     console.log('Id:', this.Ref);

      //geting single post info
    this.po = this._data.getPostInfo(this.Ref).subscribe((i) => {
      this.po = i; 
      console.log(this.po);
    });*/
 
  

}
      Topost(){
      this.router.navigate(['/post'])
      }
      ToProfile(){
        this.router.navigate(['/profile'])
      }

      like(){
        this.likes = this.likes + 1;
      }
      like2(){
        this.likes2 = this.likes2 + 1;
      }



}
