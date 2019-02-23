import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'rant-list',
  templateUrl: './rant-list.component.html',
  styleUrls: ['./rant-list.component.scss']
})
export class RantListComponent implements OnInit {
  post: {};

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getPostList().subscribe((data) => {
      this.post = (data.ok) ?  data.posts : this.post = [];
    });
  }

  viewComment() {
    this.router.navigateByUrl('post/id');
  }
}
