/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-useless-constructor */
import { Injectable } from '@angular/core';
import { Posts } from '../posts';

@Injectable({
  providedIn: 'root',
})
export class TransferDataService {
  private post:Posts;

  constructor() {

  }

  public sendData(data:Posts) {
    this.post = data;
  }

  public getData():Posts {
    return this.post;
  }
}
