import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFirstComponent } from "./app-first-component/app-first-component";
import { AppComponenteInline } from "./app-componente-inline/app-componente-inline";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFirstComponent, AppComponenteInline],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
}
