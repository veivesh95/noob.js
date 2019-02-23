import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private router: Router) { }

  @Output() closeNewPostPopupEvent = new EventEmitter();

  ngOnInit() {
  }

  closeAddPostPopup() {
    this.closeNewPostPopupEvent.emit();
  }
}
