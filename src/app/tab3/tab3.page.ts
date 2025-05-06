import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  constructor(private router: Router) {}

  tabs = [0, 1, 2];
  tabActivo = 0;

  seleccionarTab(index: number) {
    this.tabActivo = index;
  }

  isLoggedIn: boolean = false;

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  signIn() {
    this.isLoggedIn = true;
    console.log('Iniciado sesión');
  }
  signOut() {
    this.router.navigate(['../../login']);
    this.isLoggedIn = false;
  }
}
