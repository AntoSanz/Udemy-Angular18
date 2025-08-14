import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  imports: [],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  task: string = '';

  addTask(newTask: string): void {
    this.task = newTask;
  }
}
