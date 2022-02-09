/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
/* eslint-disable no-useless-constructor */
/* eslint-disable import/extensions */
import {
  AfterViewInit, Component, OnDestroy, OnInit, ViewChild,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Posts } from '../../posts';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy, AfterViewInit {
  public columnsToDisplay = ['id', 'title', 'completed', 'actions'];

  dataSource = new MatTableDataSource<Posts>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  private destroy$ = new Subject();

  constructor(private postsService: PostsService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.postsService
      .get()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: Posts[]) => {
        this.dataSource.data = res;
      });
  }

  confirmDelete(id:number): void {
    const isConfirmed = window.confirm('Are you sure you want to delete this?');
    if (isConfirmed) {
      this.postsService.delete(id)
        .pipe(takeUntil(this.destroy$))
        .subscribe((res) => {
          console.log(res);
        });
      const index = this.dataSource.data.findIndex((post:Posts) => post.id === id);
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
