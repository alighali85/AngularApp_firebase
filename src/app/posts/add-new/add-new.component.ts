import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  posts: Observable<any>;
  firstName: any ;
  constructor( private db: AngularFireDatabase ) { 

  }
   
  ngOnInit() { 
    this.posts = this.db.object( '/posts' ).valueChanges();
  } 

  addNewPost(f: NgForm ) {
    console.log(f.value);
    this.db.list('posts').push(f.value)
  }

  getPosts( listPath ): Observable <any[]> {
    return this.db.list( listPath ).valueChanges();
  }

  showFirstName($event) {
    console.log($event.target.value);
    console.log(this.firstName)
  }

}
function newFunction() {
  return this.postTitleInput;
}

