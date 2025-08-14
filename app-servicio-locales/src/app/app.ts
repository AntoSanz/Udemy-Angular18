import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './pipes/translate-pipe';
import { WithTranslation } from './mixins/with-translation.mixin';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent extends WithTranslation(class {}) {}
