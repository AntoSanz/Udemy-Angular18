import { Component } from '@angular/core';

@Component({
  selector: 'app-for-component',
  imports: [],
  templateUrl: './for-component.html',
  styleUrl: './for-component.css',
})
export class ForComponent {
  tasks: string[] = [
    'Aprender Angular',
    'Desarrollar una App',
    'Aprender TypeScript',
  ];
  addTask(newTask: string): void {
    if(newTask){
      this.tasks.push(newTask);
    }
  }
}
