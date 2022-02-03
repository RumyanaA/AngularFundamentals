import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Posts } from '../../posts';
import { PostsService } from '../../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit, OnDestroy {

  posts: Posts[];
  subscription: Subscription;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.subscription=this.postsService.get().subscribe((res:Posts[])=>{
      this.posts=res;
      console.log(this.posts[0]);
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
