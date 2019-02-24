import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AddPostComponent } from '../add-post/add-post.component'

@Component({
  selector: 'rant-list',
  templateUrl: './rant-list.component.html',
  styleUrls: ['./rant-list.component.scss']
})
export class RantListComponent implements OnInit {
  post: {};
  isShowNewPostPopup = false;

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getPostList().subscribe((data: any) => {
      this.post = (data.ok) ? data.posts : this.post = [];
    });
  }

  viewComment(id) {
    this.router.navigateByUrl('post/' + id);
  }

  closeNewPostPopup() {
    this.isShowNewPostPopup = false;
  }
}
