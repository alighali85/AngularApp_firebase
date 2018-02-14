import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  posts: Observable<any[]>;
  postTitleVali: any;
  postTitle= '';
  postText= '';
  postImage= '';

  constructor( private db: AngularFireDatabase ) { 
    
  }
   
  ngOnInit() { } 

  addNewPost() {
    this.db.list('posts').push({
      title: this.postTitle , text: this.postText, img: this.postImage
    })
  
  }

  getPosts( listPath ): Observable <any[]> {
    return this.db.list( listPath ).valueChanges();
  }

  setPostTitle( event:any ) {
    return this.postTitle += event.target.value;
  }
  setPostText( event:any ) {
    return this.postText += event.target.value;
  }
  setPostImage( event:any ) {
    return this.postImage += event.target.value;
  }

}
function newFunction() {
  return this.postTitleInput;
}

