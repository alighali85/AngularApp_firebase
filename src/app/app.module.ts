import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/router/src/config';

import { HomeComponent } from './home/home.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MemberAreaComponent } from './member-area/member-area.component';
import { NotesComponent } from './notes/notes.component';
import { AppRoutingModule } from './/app-routing.module';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavbarComponent,
    MemberAreaComponent,
    NotesComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
