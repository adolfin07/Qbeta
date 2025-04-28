import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent implements OnInit {
  constructor(private router: Router) {}
  toLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {}
}
