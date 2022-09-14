import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/loginModel';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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

  constructor() {}

  ngOnInit() {}

  submit() {
    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      this.formLogin.email,
      this.formLogin.password
    )
      .then((userCredential) => {
        alert('Logged In :D');

        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Cred Are Wrong');
      });
  }
}
