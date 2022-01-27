import { Component, OnInit, Input } from '@angular/core';
import {PostService} from "../../services/post.service"
import { Post } from '../../Post';
import {Comment} from "../../Comment"

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post
  comments: Comment[] = []

  constructor(private postService : PostService) { }

  ngOnInit(): void {
  }

  toogleCommentsShown(id: number): void {
    this.postService.getComments(id).subscribe((comments)=> this.comments = comments)
  }

}
