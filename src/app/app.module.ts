import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { AllPostsComponent} from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component'

@NgModule({
  declarations: [
    AppComponent,
    AllPostsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }