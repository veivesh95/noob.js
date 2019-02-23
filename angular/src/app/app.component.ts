import { Component, ViewChild } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: "AIzaSyDB5f3HUXPSirKsbS0FgqApYgOnfdLT3BE",
  authDomain: "noodjs-angular.firebaseapp.com",
  databaseURL: "https://noodjs-angular.firebaseio.com",
  projectId: "noodjs-angular",
  storageBucket: "noodjs-angular.appspot.com",
  messagingSenderId: "45237611857"
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})


export class AppComponent {
  title = "Eyepax JavaScript Hackathon";
  isShowLoginModel: boolean = false;

  ngOnInit() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}


