import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  form: any = {
    name: '',
    email: '',
    address: '',
    password: ''
  };
  errorMessage = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  onSubmit(): void {
    this.authService.signup(this.form).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.errorMessage = 'Signup failed!';
      }
    });
  }
}
