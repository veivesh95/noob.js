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
  ngOnInit() {
  }

  popUp: any[];

  login() {
    this.router.navigateByUrl('login');
  }

  logout() {
  }
}
