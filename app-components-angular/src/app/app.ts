import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFirstComponent } from "./app-first-component/app-first-component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFirstComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
