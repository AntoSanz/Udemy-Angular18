import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child-component/child-component';
import { ShowMessage } from './show-message/show-message';
import { ReflectText } from './reflect-text/reflect-text';
import { TwoWayBinding } from "./two-way-binding/two-way-binding";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, ShowMessage, ReflectText, TwoWayBinding],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'Hola Angular';
  eventBindingTitle: string = 'Event Binding'
  propertyBindingTitle: string = 'Property Binding';
  twoWayTitle: string = 'Two Way Binding'
}
