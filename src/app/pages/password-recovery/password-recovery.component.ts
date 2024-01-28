import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css'],
})
export class PasswordRecoveryComponent {
  data = { email: '' };
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.passwordRecovery(this.data.email).subscribe({
      next: () => {
        alert('Se ha enviado un correo con el código de recuperación');
        this.router.navigate(['/reset-password', this.data.email]);
      },
      error: (error) => {
        console.error(error);
        alert(
          `Ocurrio un error al envio de correo.\n\n${JSON.stringify(
            error.error,
            null,
            2
          )}`
        );
      },
    });
  }
}
