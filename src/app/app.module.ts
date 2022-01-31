import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllPostsComponent} from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';
import { ButtonComponent } from './components/button/button.component';
import { CommentComponent } from './components/comment/comment.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { HeaderComponent } from './components/header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    PostComponent,
    ButtonComponent,
    CommentComponent,
    AddPostComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
