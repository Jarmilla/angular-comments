import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Post } from '../Post';
import {Comment} from "../Comment"

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type" : "application/json",
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = "https://jsonplaceholder.typicode.com/posts"


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl)
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post, httpOptions)
  }

  getComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/${id}/comments`)
  }

}
