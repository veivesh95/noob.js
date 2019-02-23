import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rant',
  templateUrl: './rant.component.html',
  styleUrls: ['./rant.component.scss']
})
export class RantComponent implements OnInit {

  constructor(private router: Router) { }
  isShowNewPostPopup = false;

  ngOnInit() {
  }

  getAddPost() {
    this.isShowNewPostPopup = true;
  }

  closeNewPostPopup() {
    this.isShowNewPostPopup = false;
  }
}
