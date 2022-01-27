import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { AllPostsComponent} from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';
import { ButtonComponent } from './components/button/button.component';
import { CommentComponent } from './components/comment/comment.component'

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    PostComponent,
    ButtonComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
