/* eslint-disable no-useless-constructor */
/* eslint-disable import/extensions */
import {
  Component, OnDestroy, OnInit, Input,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Posts } from '../../posts';
import { PostsService } from '../../services/posts.service';
import { TransferDataService } from '../../services/transferData.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
})
export class PostsComponent implements OnInit, OnDestroy {
  public posts: Posts[];

  @Input() currentRow = {};

  public columnsToDisplay = ['id', 'title', 'completed', 'actions'];

  private destroy$ = new Subject();

  constructor(
     private postsService: PostsService,
     private transferDataService: TransferDataService,
  ) {}

  ngOnInit(): void {
    this.postsService
      .get()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Posts[]) => {
        this.posts = res;
      });
  }

  getData(row: Posts) {
    this.transferDataService.sendData(row);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
