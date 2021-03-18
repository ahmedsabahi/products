import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  pswd: any = 'password';
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^\w+@\w+\.\w+$/)]],
      username: ['', [Validators.required, Validators.pattern(/^\S+$/)]],
      password: ['', [Validators.required, Validators.pattern(/^\S{8,}$/)]],
    });
  }

  ngOnInit(): void {}

  get signUpControls() {
    return this.signUpForm.controls;
  }

  submitForm() {
    console.log(this.signUpForm.value);
    this.router.navigate(['']);
  }

  showPassword() {
    if (this.pswd === 'text') {
      this.pswd = 'password';
    } else {
      this.pswd = 'text';
    }
  }
}
