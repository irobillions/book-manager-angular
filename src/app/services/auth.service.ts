import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {User} from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  createNewUser(user: User) {
    return new Promise(
      ((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(user.getEmail, user.getPassword).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      })
    );
  }

  signInUser(user: User) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(user.getEmail, user.getPassword).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOut() {
    firebase.auth().signOut();
  }
}
