import { HttpClient } from "@angular/common/http";
import { map, Observable} from 'rxjs';
import { Posts } from "../posts/posts";

export class BaseService{
    protected url:string;
    constructor(protected httpClient: HttpClient){}

    get():Observable<Posts[]>{
        return this.httpClient.get<Posts[]>(this.url)
        .pipe(
            map((res:Posts[])=>{
               return res;
            })
        )
    }
}