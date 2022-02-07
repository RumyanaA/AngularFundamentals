import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { ViewDetailsComponent } from './components/posts/view-details/view-details.component';
import { ViewEditComponent } from './components/posts/view-edit/view-edit.component';

const routes: Routes = [
  { path: 'posts/add', component: AddPostComponent },
  { path: 'posts/:id/edit', component: ViewEditComponent },
  { path: 'posts/:id', component: ViewDetailsComponent },
  { path: 'posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule { }
