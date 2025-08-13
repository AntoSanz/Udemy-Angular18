import { Component } from '@angular/core';
import { ChildComponent } from "./child-component/child-component";

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css'
})
export class ParentComponent {
  command:string = "El componente padre se crea con: ng g c parent-component --skip-tests    "
}
