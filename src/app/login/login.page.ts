import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {
username: any;
password: any;
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/tabs']);
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.login(); // Si presionan Enter, se llama a la función de login
    }
  }
}
