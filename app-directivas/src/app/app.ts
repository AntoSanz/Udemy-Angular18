import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentIf } from "./component-if/component-if";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
titleIf: string = "Directiva IF en Angular";
}
