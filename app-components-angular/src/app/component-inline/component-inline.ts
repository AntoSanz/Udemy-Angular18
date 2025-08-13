import { Component } from '@angular/core';

@Component({
  selector: 'app-component-inline',
  imports: [],
  template: `
    <div class="box">
      <h1 class="text-warning">{{ title }}</h1>
      <p>{{ description }}</p>
      <ul>
        <li>{{ inlineTemplateDescription }}</li>
        <li>{{ inlineStyleDescription }}</li>
        <li>{{ skypTestDescription }}</li>
      </ul>
    </div>
  `,
  styles: `
  .box {
    border: 1px solid red;
    margin: 1rem;
    padding: 1rem;
  }
  `,
})
export class AppComponentInline {
  title = 'app-componente-inline works!';
  description =
    'Comando para crear componente inline: g c app-componente-inline --inline-template --inline-style --skip-tests';
  inlineTemplateDescription = '--inline-template: No se genera el archivo html';
  inlineStyleDescription = '--inline-style: No se genera el archivo css';
  skypTestDescription = '--skip-tests: No se genera el archivo de test';
}
