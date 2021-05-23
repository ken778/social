import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.page.html',
  styleUrls: ['./detailed.page.scss'],
})
export class DetailedPage implements OnInit {

  post:any;
  postID:any;
  constructor(private _route : ActivatedRoute,private _data: PostService, private router: Router) { }

  ngOnInit() {
    this.postID = this._route.snapshot.paramMap.get('ref');
    console.log(this.postID);

    //getting single post data
    this.post = this._data.getPostInfo(this.postID).subscribe((i) => {
      this.post = i;
      console.log(this.post);
    });
  }
  back(){
    this.router.navigate(['/feed'])
  }

}
