import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, LoginRequest } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  loading = false;
  error = '';

  getToken() {
    this.error = '';
    this.loading = true;
    this.auth.getTokenByClick().subscribe({
      next: (token) => {
        // token may be raw string or JSON string with quotes
        const clean = typeof token === 'string' ? token.replace(/^"|"$/g, '') : (token as any)?.token;
        this.auth.saveToken(clean || '');
        this.router.navigate(['/home']);
      },
      error: () => {
        this.error = 'Failed to get token';
        this.loading = false;
      },
      complete: () => (this.loading = false),
    });
  }
}
