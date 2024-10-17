import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: any = {
    email: '',
    password: ''
  };
  errorMessage = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.form).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.errorMessage = 'Login failed!';
      }
    });
  }
}
