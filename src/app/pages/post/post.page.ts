import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  likes:[];

  constructor(private toastr: ToastController,private auth:AuthService,private _afa: AngularFirestore, private router: Router) { }

  ngOnInit() {
  }

  post(PostData:NgForm){
    let date = new Date()
    let DateCreated = date.getDate();
    let createdAt = date.getTime();

    
     //creating a post
      this.auth.LogedUser().subscribe(res => {
      
          const PostInfo : any = {
            'id_user' : res.uid,
             'message': PostData.value.postMessage,
             'about': PostData.value.about,
            'date_created' : DateCreated,
            'createdAt' : createdAt,
             likes:[],
          }
          //post job
          console.log(PostInfo)

          this._afa.collection('posts').add(PostInfo).then( () => {
          this.toast('post created','success')
          this.router.navigate(['/home-page'])
          }).catch( err => {
            console.log(err.message)
          })

       
      })


  }

  toHome(){
    this.router.navigate(['/home-page'])
  }
  toProfile(){
    this.router.navigate(['/profile'])
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

}
