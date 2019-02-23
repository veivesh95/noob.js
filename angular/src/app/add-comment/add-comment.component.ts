import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeCommentPopup() {
    this.router.navigateByUrl('post/id');
  }

}
