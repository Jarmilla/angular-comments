import { Component, OnInit } from '@angular/core';
import {CommentService} from "../../services/comment.service"
import { Post } from '../../Post';

@Component({
  selector: 'app-allcomments',
  templateUrl: './allcomments.component.html',
  styleUrls: ['./allcomments.component.scss']
})
export class AllcommentsComponent implements OnInit {
  posts : Post[] = []

  constructor(private commentService: CommentService) { }
  

  ngOnInit(): void {
    this.commentService.getData().subscribe((posts)=> this.posts = posts)

  }

}
