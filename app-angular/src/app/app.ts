import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child-component/child-component';
import { ShowMessage } from "./show-message/show-message";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, ShowMessage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Hola Angular';
}
