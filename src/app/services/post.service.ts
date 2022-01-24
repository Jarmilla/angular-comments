import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = "https://jsonplaceholder.typicode.com/posts"


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
  }

}
