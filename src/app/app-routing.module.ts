import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { NotesComponent } from './notes/notes.component';
import { HomeComponent } from './home/home.component';
import { MemberAreaComponent } from './member-area/member-area.component';
import { PostsComponent } from './posts/posts.component';
import { AddNewComponent } from './posts/add-new/add-new.component';
import { ArchiveComponent } from './posts/archive/archive.component';
import { DeletedComponent } from './posts/deleted/deleted.component';
import { PostsHomeComponent } from './posts/posts-home/posts-home.component'

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
    component: PostsComponent,
    children:
    [{ path: '',
    component: PostsHomeComponent,
    },
    
    { path: 'posts-home',
    component: PostsHomeComponent
    },
    
    { path: 'add-new',
      component: AddNewComponent
    },

    { path: 'archive',
      component: ArchiveComponent
    },

    { path: 'deleted',
    component: DeletedComponent
    }
  ]
  },
  {
    path: 'member-area',
    component: MemberAreaComponent
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule],
})
export class AppRoutingModule { }
