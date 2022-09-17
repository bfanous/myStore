// import { AuthService } from './../Core/auth/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // public itemsCounter: number = this.service.getItemsCounter();
  constructor(
    private service: SharedService,
    public authservice: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    console.log(this.authservice.isAuthenticated$);
  }

  LoginWithAuth0() {
    this.authservice.loginWithRedirect();
  }

  getCounter() {
    return this.service.getItemsCounter();
  }

  logout() {
    this.authservice.logout({ returnTo: this.doc.location.origin });
  }
}
