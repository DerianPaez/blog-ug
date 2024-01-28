import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log({ user: this.user });

    this.authService.loginUser(this.user).subscribe({
      next: (data) => {
        this.authService.saveToken(data.token);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error(error);
        alert(
          `No pudimos iniciar sesión con tus credenciales. Por favor verifica tu correo electrónico y contraseña e intenta nuevamente.\n\n${JSON.stringify(
            error.error,
            null,
            2
          )}`
        );
      },
    });
  }
}
