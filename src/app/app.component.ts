import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-manager';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAS11yvXeOaIfxovUcQOWcM-rKu3UhMNrE',
      authDomain: 'book-manager-373fe.firebaseapp.com',
      databaseURL: 'https://book-manager-373fe.firebaseio.com',
      projectId: 'book-manager-373fe',
      storageBucket: 'book-manager-373fe.appspot.com',
      messagingSenderId: '361518788798',
      appId: '1:361518788798:web:02810eba41e3015d56aeef',
      measurementId: 'G-3T18SLYL0W'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }
}
