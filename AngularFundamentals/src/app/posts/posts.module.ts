import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './components/delete/delete.component';
import { CreateComponent } from './components/create/create.component';
import { ReadComponent } from './components/read/read.component';
import { UpdateComponent } from './components/update/update.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './posts.service';


@NgModule({
  declarations: [
    DeleteComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    PostsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[],
  providers:[
    PostsService
  ]
})
export class PostsModule { }
