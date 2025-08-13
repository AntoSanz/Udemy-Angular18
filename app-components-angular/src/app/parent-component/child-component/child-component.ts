import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css'
})
export class ChildComponent {
  command:string = "El componente hijo se crea con: ng g c /parent-component/child-component --skip-tests"
}
