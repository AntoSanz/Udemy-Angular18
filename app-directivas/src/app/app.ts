import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentIf } from './component-if/component-if';
import { AddTask } from './add-task/add-task';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentIf, AddTask],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titleIf: string = 'Directiva IF';
  tittleLocalReference: string = 'Local Reference';
}
