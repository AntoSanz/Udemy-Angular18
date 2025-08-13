import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css',
})
export class Interpolacion {
  title:string = 'interpolacion works!';
  user: {name: string, age: number} = {
    name: 'Antonio',
    age: 36,
  };

  helloUser() {
    return `Hola, ${this.user.name}`;
  }
}
