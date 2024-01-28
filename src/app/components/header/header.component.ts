import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLogged = this.authService.isLoggedIn();

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logoutUser();
  }
}
