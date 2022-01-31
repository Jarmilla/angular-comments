import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service"
import { Post } from '../../Post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  posts : Post[] = []

  constructor(private postService: PostService) { }
  

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts)=> this.posts = posts)
  }

  addNewPost(post: Post) {
    console.log(post)
    this.postService.addPost(post).subscribe((post)=> this.posts.push(post))
  }
 
}
