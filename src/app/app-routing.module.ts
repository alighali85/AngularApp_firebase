import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { NotesComponent } from './notes/notes.component';
import { HomeComponent } from './home/home.component';
import { MemberAreaComponent } from './member-area/member-area.component';
import { PostsComponent } from './posts/posts.component'

const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'member-area',
    component: MemberAreaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule],
})
export class AppRoutingModule { }
