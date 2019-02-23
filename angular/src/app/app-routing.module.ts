import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { PostViewComponent } from './post-view/post-view.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LoginComponent } from './login/login.component';
import { RantComponent } from './rant/rant.component';

const routes: Routes = [
  { path: '', component: RantComponent },
  { path: 'post/id', component: PostViewComponent },
  { path: 'add/comment', component: AddCommentComponent },
  { path: 'add/post', component: AddPostComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
