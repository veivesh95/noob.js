import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  @Output() closeNewCommentModelEvent = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeCommentPopup() {
    this.closeNewCommentModelEvent.emit();
  }

}
