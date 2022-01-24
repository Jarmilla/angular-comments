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
    this.postService.getData().subscribe((posts)=> this.posts = posts)

  }

}
