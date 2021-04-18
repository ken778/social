import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public _fire: AngularFirestore) { }

  GetJobs() {
    return this._fire.collection('posts');
  }
   //get single Job data
   getPostInfo(ref) {
    return this._fire.collection('posts').doc(ref).valueChanges();
  }
}
