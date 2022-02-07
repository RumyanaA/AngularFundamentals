/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-useless-constructor */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Posts } from 'src/app/posts/posts';
import { PostsService } from 'src/app/posts/services/posts.service';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-edit',
  templateUrl: './view-edit.component.html',
  styleUrls: ['./view-edit.component.sass'],
})
export class ViewEditComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
