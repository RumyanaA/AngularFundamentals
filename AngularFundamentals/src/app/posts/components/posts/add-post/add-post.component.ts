/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass'],
})
export class AddPostComponent implements OnInit {
  public title = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }
}
