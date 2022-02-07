import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { AppRoutingModule } from '../app-routing.module';
import { TransferDataService } from './services/transferData.service';

@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [
    PostsService,
    TransferDataService,
  ],
})
export default class PostsModule { }
