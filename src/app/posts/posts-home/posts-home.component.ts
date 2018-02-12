import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'aposts-home',
  templateUrl: './posts-home.component.html',
  styleUrls: ['./posts-home.component.css']
})
export class PostsHomeComponent implements OnInit {

 
  postsObservable : Observable <any[]>;

  constructor( private db : AngularFireDatabase ) { }

  ngOnInit() {
    this.postsObservable = this.getPosts('/posts');
  }

  getPosts( listPath ): Observable <any[]> {
    return this.db.list( listPath ).valueChanges();
  }
  
}
