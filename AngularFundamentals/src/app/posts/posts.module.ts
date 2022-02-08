import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { ViewDetailsComponent } from './components/posts/view-details/view-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { TransferDataService } from './services/transferData.service';
import { ViewEditComponent } from './components/posts/view-edit/view-edit.component';
import { PostsRoutingModule } from './posts-routing.module';
import { AddPostComponent } from './components/posts/add-post/add-post.component';

@NgModule({
  declarations: [
    PostsComponent,
    ViewDetailsComponent,
    ViewEditComponent,
    AddPostComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PostsRoutingModule,
    MatCheckboxModule,
  ],
  exports: [],
  providers: [
    PostsService,
    TransferDataService,
  ],
})
export default class PostsModule { }
