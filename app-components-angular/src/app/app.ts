import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFirstComponent } from './first-component/first-component';
import { AppComponentInline } from './component-inline/component-inline';
import { Interpolacion } from './interpolacion/interpolacion';
import { ParentComponent } from './parent-component/parent-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppFirstComponent,
    AppComponentInline,
    Interpolacion,
    ParentComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
