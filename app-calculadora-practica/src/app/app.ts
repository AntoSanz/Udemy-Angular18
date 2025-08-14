import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from "./calculator/calculator";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Calculator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = "Aplicación Calculadora"
}
