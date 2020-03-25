import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { User} from '../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  errorMessage: string;


  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      });
  }
  onSubmit() {
    const fullName = this.signUpForm.get('fullName').value;
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    const user = new User(email, password);
    user.fullName = fullName;
    this.authService.createNewUser(user).then(
      () => {
        console.log('enregistrement reussie');
        this.router.navigate(['/books']).then(
          () => {
            alert('Bienvenue !' + user.fullName );
          },
          (error) => {
            alert('Erreur d\'accès a la page!!: ' + error);
          }
        );
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
