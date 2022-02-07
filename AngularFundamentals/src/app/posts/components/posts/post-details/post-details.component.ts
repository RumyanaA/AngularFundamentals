/* eslint-disable import/no-unresolved */
/* eslint-disable dot-notation */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/posts/posts';
import { TransferDataService } from 'src/app/posts/services/transferData.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.sass'],
})
export class PostDetailsComponent implements OnInit {
  public post: Posts;

  constructor(private transferDataService: TransferDataService) { }

  ngOnInit(): void {
    this.post = this.transferDataService.getData();
  }
}
