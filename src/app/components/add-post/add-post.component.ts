import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Post} from "../../Post"

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  @Output() onAddPost: EventEmitter<Post> = new EventEmitter()
  title: string;
  body: string;
  userId: number;

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (!this.title) alert("Please add a title to your post.")
    if (!this.body) alert("Please add some text to your post.")
    if(!this.userId) alert ("Please add you userId to your post.")
 
    const newPost = {
      title: this.title,
      body: this.body,
      userId: this.userId,
      id: new Date().getTime() + this.userId
    }

    this.onAddPost.emit(newPost)

    this.title = ""
    this.body = ""
    this.userId = null
  }

}
