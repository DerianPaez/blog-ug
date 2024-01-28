import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  data = { email: '', newPassword: '', code: '' };

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const email = this.route.snapshot.paramMap.get('email');
    this.data.email = email ? decodeURIComponent(email) : '';

    if (!this.data.email) {
      alert('No se ha especificado el correo a resetear la contraseña');
      return;
    }
  }

  onSubmit() {
    this.authService
      .passwordReset(this.data.email, this.data.code, this.data.newPassword)
      .subscribe({
        next: () => {
          alert('Contraseña actualizada correctamente');
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error(error);
          alert(
            `Ocurrio un error al momento de resetear la contraseña.\n\n${JSON.stringify(
              error.error,
              null,
              2
            )}`
          );
        },
      });
  }
}
