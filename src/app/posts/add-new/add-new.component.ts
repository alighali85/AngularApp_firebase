import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { NgForm } from '@angular/forms/src/directives/ng_form';
import * as $ from 'jquery';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})

export class AddNewComponent implements OnInit {
  
  posts: Observable<any>;
  postTimeToShow: any;
  postTime: any = {year: "", month: "", day: "", hour: "", minute: "" };

  constructor( private db: AngularFireDatabase, private router: Router ) { 
  }
   
  ngOnInit() {
    let date = new Date();
    this.postTime.year =  date.getFullYear().toString();
    let local = "en-us";
    this.postTime.month= date.toLocaleString(local, {month: "short"}).toString();;
    this.postTime.day = date.getDate().toString();;
    this.postTime.hour = date.getHours().toString();;
    this.postTime.minute = date.getMinutes().toString();
    this.postTimeToShow = this.postTime.day + " "+ this.postTime.month +" "+ this.postTime.year + " - " + this.postTime.hour + ":" + this.postTime.minute; 
    console.log(this.postTime)
    
  } 

  addNewPost(f: NgForm ) {
    console.log(f.value);
    this.db.list('posts').push(f.value).then(_ => {
      $('#addPost--form').css('display', 'none');
      this.router.navigate(['/posts']);
      console.log('Addes one post successfully ')
    });
  }

}


