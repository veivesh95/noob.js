import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {
  }

  isShowLoginLoader = false;
  @Output() closeLoginModelEvent = new EventEmitter();

  ngOnInit() {
  }

  closeLoginModel() {
    this.closeLoginModelEvent.emit();
  }

  onSubmit($event){
    $event.preventDefault();
    this.isShowLoginLoader = true;
  }
}
