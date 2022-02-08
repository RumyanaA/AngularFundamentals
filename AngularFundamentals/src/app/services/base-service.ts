/* eslint-disable no-useless-constructor */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../posts/posts';

export class BaseService {
  protected url:string;

  constructor(protected httpClient: HttpClient) {}

  get():Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.url);
  }

  getPost(id:number): Observable<Posts> {
    return this.httpClient.get<Posts>(`${this.url}/${id}`);
  }

  post(body:string): Observable<any> {
    return this.httpClient.post(this.url, body);
  }

  update(id:number, body:string): Observable<any> {
    return this.httpClient.put(`${this.url}/${id}`, body);
  }

  delete(id:number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
