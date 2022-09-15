import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/loginModel';
import { Router } from '@angular/router';

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

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit() {}

  submit() {
    this.authservice.login(this.formLogin).subscribe((res) => {
      if (res === false) {
        this.authservice.Auth(false);
        console.log('Wrong User');
      } else {
        this.authservice.Auth(true);
        this.router.navigate(['cardList']);
      }
      this.setIsLoading(false);
      console.log(res);
      console.log(this.authservice.isAuth);
    });
  }
  isLoading() {
    return this.authservice.isLoading;
  }
  setIsLoading(bool: boolean) {
    this.authservice.isLoading = bool;
  }
}
