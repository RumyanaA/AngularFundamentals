import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';
import { Observable } from 'rxjs';
import { BaseService } from '../services/base-service';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseService {
override url = "https://jsonplaceholder.typicode.com/todos";
  constructor(protected http: HttpClient) {
    super(http);
   }

}
