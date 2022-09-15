import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterModel } from 'src/app/models/registerModel';
import { LoginModel } from 'src/app/models/loginModel';
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   signInWithEmailAndPassword,
//   signOut,
// } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;
  Auth(isauth: boolean) {
    this.isAuth = isauth;
  }
  isLoading: boolean = false;

  readonly baseURL = 'http://beshoyfanous-001-site1.btempurl.com/api/';

  constructor(/*private router: Router,*/ private http: HttpClient) {}

  login(formLogin: LoginModel) {
    this.isLoading = true;
    return this.http.post(this.baseURL + 'User/Login', formLogin, {});

    // if (!this.isLoading) {
    //   this.isLoading = true;
    //   const auth = getAuth();
    //   signInWithEmailAndPassword(auth, formLogin.email, formLogin.password)
    //     .then((userCredential) => {
    //       alert('Logged In :D');
    //       this.isAuth = true;
    //       this.router.navigate(['cardList']);
    //       // Signed in
    //       const user = userCredential.user;
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       alert('Cred Are Wrong');
    //       this.isAuth = false;
    //     })
    //     .finally(() => (this.isLoading = false));
    // }
  }

  register(register: RegisterModel) {
    this.isLoading = true;
    return this.http.post(this.baseURL + 'User/CreateUser', register, {
      responseType: 'text',
    });

    //   if (!this.isLoading) {
    //     this.isLoading = true;
    //     if (fromRegister.password !== fromRegister.confirmpassword) {
    //       debugger;
    //       this.isLoading = false;
    //       return;
    //     }
    //     const auth = getAuth();
    //     createUserWithEmailAndPassword(
    //       auth,
    //       fromRegister.email,
    //       fromRegister.password
    //     )
    //       .then((userCredential) => {
    //         alert('مبروووووك');
    //         this.isAuth = true;
    //         // Signed in
    //         const user = userCredential.user;
    //         // ...
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // ..
    //         this.isAuth = false;
    //       })
    //       .finally(() => (this.isLoading = false));
    //   }
  }

  logout() {
    this.isAuth = false;
    // const auth = getAuth();
    // signOut(auth)
    //   .then(() => {
    //     this.isAuth = false;
    //     this.router.navigate(['signin']);
    //     // Sign-out successful.
    //   })
    //   .catch((error) => {
    //     // An error happened.
    //   });
  }
}
