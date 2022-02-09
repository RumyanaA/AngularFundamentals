/* eslint-disable import/no-unresolved */
/* eslint-disable dot-notation */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/posts/posts';
import { Subject, takeUntil } from 'rxjs';
import { PostsService } from 'src/app/posts/services/posts.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit {
  public post: Posts;

  private destroy$ = new Subject();

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getPostId();
  }

  getPostId() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService
      .getPost(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((post: Posts) => {
        this.post = post;
      });
  }
}
