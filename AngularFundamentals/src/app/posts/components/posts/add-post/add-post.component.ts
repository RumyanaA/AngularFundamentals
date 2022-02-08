/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-useless-constructor */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Posts } from 'src/app/posts/posts';
import { PostsService } from 'src/app/posts/services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass'],
})
export class AddPostComponent implements OnInit, OnDestroy {
  public postForm = new FormGroup({
    title: new FormControl(''),
    completed: new FormControl(false),
  });

  private destroy$ = new Subject();

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    this.postsService.post(this.postForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res:Posts) => {
        window.alert(`Successfully saved id: ${res.id}, title: ${res.title}, completed: ${res.completed}`);
        this.postForm.reset();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
