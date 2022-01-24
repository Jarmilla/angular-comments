import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import {AllcommentsComponent} from './components/allcomments/allcomments.component';
import { CommentComponent } from './components/comment/comment.component'

@NgModule({
  declarations: [
    AppComponent,
    AllcommentsComponent,
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
