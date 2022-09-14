import { RegisterModel } from 'src/app/models/registerModel';
import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { LoginModel } from 'src/app/models/loginModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) {}

  login(formLogin: LoginModel) {
    if (!this.isLoading) {
      this.isLoading = true;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, formLogin.email, formLogin.password)
        .then((userCredential) => {
          alert('Logged In :D');
          this.isAuth = true;
          this.router.navigate(['cardList']);
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert('Cred Are Wrong');
          this.isAuth = false;
        })
        .finally(() => (this.isLoading = false));
    }
  }

  register(fromRegister: RegisterModel) {
    if (!this.isLoading) {
      this.isLoading = true;
      if (fromRegister.password !== fromRegister.confirmpassword) {
        debugger;
        this.isLoading = false;
        return;
      }
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        fromRegister.email,
        fromRegister.password
      )
        .then((userCredential) => {
          alert('مبروووووك');
          this.isAuth = true;
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          this.isAuth = false;
        })
        .finally(() => (this.isLoading = false));
    }
  }
}
