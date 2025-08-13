import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css'
})
export class ChildComponent {

  private _title = 'Componente hijo';

  //Getter de typescript
  get showTitle(){
    return this._title;
  }

  getTitle(){
    return this._title;
  }
}
