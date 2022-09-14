import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/models/registerModel';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor() {}
  fromRegister: RegisterModel = {
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
  };
  passwordMatched: boolean = false;

  ngOnInit() {}

  submit() {
    if (this.fromRegister.password === this.fromRegister.confirmpassword) {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        this.fromRegister.email,
        this.fromRegister.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
  }
}
