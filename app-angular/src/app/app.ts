import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child-component/child-component';
import { ShowMessage } from './show-message/show-message';
import { ReflectText } from './reflect-text/reflect-text';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, ShowMessage, ReflectText],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'Hola Angular';
  propertyBindingTitle: string = 'Property Binding';
}
