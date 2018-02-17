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
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  totalPostsNumber: any;
  postsObservable : Observable <any>;

  constructor( private db: AngularFireDatabase ) {
  
       }

  ngOnInit() {
    
    this.postsObservable = this.getPosts('/posts');
    this.totalPostsNumber = this.postsObservable.forEach (post => {
      console.log (post.text)
    });
    console.log( this.postsObservable)
  }

  filteredSearch( title ) : Observable <any[]>{
    return  this.db.list( title, ref => {
      console.log(ref);
      return ref.orderByChild('title')
    } ).valueChanges();
  
  }
  
  getPosts( listPath ): Observable <any[]> {
    let snap: any;
    return  this.db.list( listPath, ref => {
      return ref.orderByChild('postTime');
    } ).valueChanges();
  }

  
  
}
