import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.page.html',
  styleUrls: ['./add-subject.page.scss'],
})
export class AddSubjectPage implements OnInit {

  constructor(private  database: AngularFirestore, private auth : AuthService,private router:Router,private storage: AngularFireStorage ) { }

  ngOnInit() {
  }

  subject(subjectData:NgForm){
    //dates
    let date = new Date()
    let DateCreated = date.getDate();
    let createdAt = date.getTime();


    this.auth.LogedUser().subscribe(res=>{
      const subjData : any = {
        'id_student' : res.uid,
        'subjectName': subjectData.value.subjectName,
        'date_created' : DateCreated,
        'createdAt' : createdAt
      }

      //adding subject
      this.database.collection('Subjects').add(subjData).then(()=>{
        console.log('subject added')
      }).catch(error=>{
        console.log(error.message);
      })
    })
  }
  toProfile(){
    this.router.navigate(['/profile'])
  }

}
