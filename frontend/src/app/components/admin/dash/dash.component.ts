import { Observable } from 'rxjs';
import { User } from './../../auth/user';
import { AuthService } from '../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  postRef: AngularFirestoreDocument<any>;
  post$: Observable<any>;
  user: User;

  documentId = 'testPost';

  constructor(private afs: AngularFirestore, public auth: AuthService) { }

  ngOnInit() {
    this.postRef = this.afs.doc(`examplePost/${this.documentId}`);
    this.post$ = this.postRef.valueChanges();

    this.auth.user$.subscribe(user => this.user = user);
  }

  editPost() {
    if (this.auth.canUpdate(this.user)) {
      this.postRef.update({title: 'Edited Title!'});
    }
  }

  createPost() {
    if (this.auth.canCreate(this.user)) {
      this.postRef.set({
        title: 'hello',
        content: 'this is content'
      });
    }
  }

  deletePost() {
    this.postRef.delete();
  }

}
