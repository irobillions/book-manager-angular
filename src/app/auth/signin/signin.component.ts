import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import * as firebase from 'firebase';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  errorMessage: string;
  signInForm: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      }
    );
  }

  onSignInUser() {
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    const user = new User(email, password);

    this.authService.signInUser(user).then(
      () => {
        console.log('connexion reussie');
        this.router.navigate(['/books']).then(
          () => {
            alert('Bienvenue!');
          }
        );
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

}
