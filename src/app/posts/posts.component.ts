import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {


  postsObservable : Observable <any[]>;

  constructor( private db : AngularFireDatabase ) { }

  ngOnInit() {
    this.postsObservable = this.getPosts('/posts');
  }

  getPosts( listPath ): Observable <any[]> {
    return this.db.list( listPath ).valueChanges();
  }
  
  addNewPost(val) {
    if (val == 'show') {
      return 'block'
    }

    if ( val == 'hide' ){
      return 'none'
    }
  }
}
