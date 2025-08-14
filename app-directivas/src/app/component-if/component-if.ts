import { Component } from '@angular/core';

@Component({
  selector: 'app-component-if',
  imports: [],
  templateUrl: './component-if.html',
  styleUrl: './component-if.css',
})
export class ComponentIf {
  isAuthenticated: boolean = false;

  toggleAuthentication(): void {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
