import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PostViewComponent } from './post-view/post-view.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { LoaderComponent } from './loader/loader.component';
import { AddPostComponent } from './add-post/add-post.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from "./data.service";
import { RantListComponent } from './rant-list/rant-list.component';
import { RantComponent } from './rant/rant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostViewComponent,
    AddCommentComponent,
    LoaderComponent,
    AddPostComponent,
    LoginComponent,
    RantListComponent,
    RantComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
