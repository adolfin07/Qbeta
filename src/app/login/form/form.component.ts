import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private router: Router) {}

  login() {
    this.router.navigate(['../../tabs/tab1']);
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.login();
    }
  }
}
