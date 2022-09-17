import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(public auth: AuthService) {}
  userEmail: any | '';
  ngOnInit() {
    this.auth.user$.subscribe(
      (profile) => (this.userEmail = JSON.stringify(profile, null, 2))
    );
    console.log(this.userEmail);
  }
}
