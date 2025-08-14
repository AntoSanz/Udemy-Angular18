import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  result: number = 0;
  operatorA: number = 0;
  operatorB: number = 0;

  calc() {
    this.result = this.operatorA + this.operatorB;
  }
}