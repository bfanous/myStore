import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/models/registerModel';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private authservice: AuthService) {}
  fromRegister: RegisterModel = {
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  };
  passwordMatched: boolean = false;

  ngOnInit() {}

  submit() {
    this.authservice.register(this.fromRegister);
  }
  isLoading() {
    return this.authservice.isLoading;
  }
}
