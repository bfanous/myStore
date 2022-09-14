import { SignoutComponent } from './../signout/signout.component';
import { SignupComponent } from './../signup/signup.component';
import { SigninComponent } from './../signin/signin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [SigninComponent, SignupComponent, SignoutComponent],
})
export class AuthModule {}
