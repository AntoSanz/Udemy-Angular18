import { Component } from '@angular/core';

@Component({
  selector: 'app-if-component',
  imports: [],
  templateUrl: './if-component.html',
  styleUrl: './if-component.css',
})
export class IfComponent {
  isAuthenticated: boolean = false;

  toggleAuthentication(): void {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
