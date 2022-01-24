import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../Post';
import {Comment} from "../../Comment"

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post
  selectedUserId? : number

  constructor() { }

  ngOnInit(): void {
  }

  toogleCommentsShown(userId: number): void {
    this.selectedUserId = userId
    console.log(this.selectedUserId)
  }

}
