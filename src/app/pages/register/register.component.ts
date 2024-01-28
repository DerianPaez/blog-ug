import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log({ user: this.user });

    this.authService.registerUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        alert('Registro exitoso.');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error(error);
        alert(
          `No pudimos completar tu registro. Por favor revisa la información proporcionada y asegúrate de que cumple con todos los requisitos.\n\n${JSON.stringify(
            error.error,
            null,
            2
          )}`
        );
      },
    });
  }
}
