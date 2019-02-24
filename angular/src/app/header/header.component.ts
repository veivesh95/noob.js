import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  isShowLoginModel = false;
  isLogedIn = false;
  ngOnInit() {
  }

  popUp: any[];

  showLoginModel() {
    this.isShowLoginModel = true;
  }

  closeLoginModel() {
    this.isShowLoginModel = false;
  }

  logout(){

  }
}
