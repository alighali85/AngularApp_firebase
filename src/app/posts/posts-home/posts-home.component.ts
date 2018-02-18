import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireAction,AngularFireList, snapshotChanges } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'aposts-home',
  templateUrl: './posts-home.component.html',
  styleUrls: ['./posts-home.component.css']
})

export class PostsHomeComponent implements OnInit {
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
    this.db.list('posts').remove($event.target.value)
  }
  getPosts( listPath ):Observable<any[]> {
    return  this.db.list(listPath).snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  
  
}
