import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFirstComponent } from "./app-first-component/app-first-component";
import { AppComponentInline } from "./app-component-inline/app-component-inline";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFirstComponent, AppComponentInline],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
}
