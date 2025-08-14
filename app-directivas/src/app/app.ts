import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTask } from './add-task/add-task';
import { ForComponent } from "./for-component/for-component";
import { IfComponent } from "./if-component/if-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddTask, ForComponent, IfComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titleIfComponent: string = 'Directiva @if';
  tittleLocalReference: string = 'Local Reference';
  titleForComponent: string = 'Directiva @for'
}
