import { Component, input } from '@angular/core';

@Component({
  selector: 'app-reflect-text',
  imports: [],
  templateUrl: './reflect-text.html',
  styleUrl: './reflect-text.css',
})
export class ReflectText {
  title: string = 'Property Binding';
  text: string = '';

  updateText(e: Event) {
    const el = e.target as HTMLInputElement;
    this.text = el.value;
  }
}
