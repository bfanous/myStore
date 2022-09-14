import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/loginModel';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  formLogin: LoginModel = {
    email: '',
    password: '',
  };

  constructor(private authservice: AuthService) {}

  ngOnInit() {}

  submit() {
    this.authservice.login(this.formLogin);
  }
  isLoading() {
    return this.authservice.isLoading;
  }
}
