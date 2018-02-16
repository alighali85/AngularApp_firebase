import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { NgForm } from '@angular/forms/src/directives/ng_form';
import * as $ from 'jquery';
import { Data } from '@angular/router/src/config';

declare var jquery:any;
declare var javascript:any

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})

export class AddNewComponent implements OnInit {
  
  posts: Observable<any>;
  firstName: any ;
  postTime: Data;
  constructor( private db: AngularFireDatabase ) { 
  }
   
  ngOnInit() {
    this.postTime= new Date();
    this.posts = this.db.object( '/posts' ).valueChanges();
  } 

  addNewPost(f: NgForm ) {
    console.log(f.value);
    this.db.list('posts').push(f.value);
    $('')
    $('#addPost--form').css('display', 'none');
    console.log(document.getElementById('newInput').innerHTML)
  }

  

  deletePost(post:any) {

  }

  showFirstName() {
    console.log(this.firstName)
  }

}
function newFunction() {
  return this.postTitleInput;
}

