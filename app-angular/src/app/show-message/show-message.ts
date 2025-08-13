import { Component } from '@angular/core';

@Component({
  selector: 'app-show-message',
  imports: [],
  templateUrl: './show-message.html',
  styleUrl: './show-message.css',
})
export class ShowMessage {
  btnShowMessageText: string = 'Mostrar mensaje';
  btnResetMessageText: string = 'Resetear mensaje';
  alertMessage: any = '';

  showMessage() {
    this.alertMessage = 'Has pulsado Mostrar mensaje';
  }
  resetMessage() {
    this.alertMessage = '';
  }
}
