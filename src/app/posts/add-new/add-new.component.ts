import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  postsObservable : Observable <any[]>;

   private postTitle = document.getElementsByClassName('postTitel');
   private postText = document.getElementsByClassName('postText');
   private postImage = document.getElementsByClassName('postImage');

  constructor( private db: AngularFireDatabase ) { }

  ngOnInit() {
    this.postsObservable = this.getPosts('/posts');
  }

  addNewPost( item: any ): Observable <any[]> {
    return item
  }

  getPosts( listPath ): Observable <any[]> {
    return this.db.list( listPath ).valueChanges();
  }

}
