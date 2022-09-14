import { AuthService } from './../Core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // public itemsCounter: number = this.service.getItemsCounter();
  constructor(
    private service: SharedService,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {}

  isAuth() {
    return this.authservice.isAuth;
  }
  getCounter() {
    return this.service.getItemsCounter();
  }
}
