import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addComment() {
    this.router.navigateByUrl('add/comment');
  }

}
