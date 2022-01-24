import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import { Post } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getData(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl)
  }
}
