import { Component } from '@angular/core';
import {CommentService} from "./services/comment.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-comments';

  constructor(private comment : CommentService) {}

  getDataFromAPI() {
    this.comment.getData().subscribe((data) => console.log(data))
  }
}
