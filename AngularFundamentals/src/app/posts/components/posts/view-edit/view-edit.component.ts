/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-useless-constructor */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Posts } from 'src/app/posts/posts';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/posts/services/posts.service';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-edit',
  templateUrl: './view-edit.component.html',
  styleUrls: ['./view-edit.component.scss'],
})
export class ViewEditComponent implements OnInit, OnDestroy {
  public postForm = new FormGroup({
    userId: new FormControl(),
    id: new FormControl(),
    title: new FormControl(),
    completed: new FormControl(),
  });

  private destroy$ = new Subject();

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private _location: Location,
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
        this.postForm.setValue(post);
      });
  }

  updatePost() {
    this.postsService.update(this.postForm.value.id, this.postForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res:Posts) => {
        console.log(res);
      });
  }

  goBack() {
    this._location.back();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
