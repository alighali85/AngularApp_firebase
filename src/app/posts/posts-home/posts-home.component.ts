import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'aposts-home',
  templateUrl: './posts-home.component.html',
  styleUrls: ['./posts-home.component.css']
})

export class PostsHomeComponent implements OnInit {
  postToEdit: any;
  postTitle: any;
  items: any;
  postlist= [];
  totalPostsNumber: number = 0;
  postsObservable : Observable <any>;

  constructor( private db: AngularFireDatabase ) {
  
       }

  ngOnInit() {
    this.postsObservable = this.getPosts('/posts');
    this.items = this.db.list('/posts/').snapshotChanges().subscribe( actions => {
      this.totalPostsNumber= 0;
      actions.forEach(action => {
        this.totalPostsNumber++;
      })
    });
  }

  removePost($event) {
    this.db.list('posts').remove($event.target.value).then(_ => console.log('success'))
    .catch(err => console.log(err, 'You do not have access!'));
  }
  
  getPosts( listPath ):Observable<any[]> {
    return  this.db.list(listPath).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  editPost($event) {
    this.postToEdit = this.db.list('posts/'+ $event.target.value).valueChanges();
    console.log("Post To Edite"+this.postToEdit);
  }

  
  
}
