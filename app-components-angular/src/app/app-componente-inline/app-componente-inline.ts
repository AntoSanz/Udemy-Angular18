import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  imports: [],
  template: `
    <div class="box">
      <strong>{{title}}</strong>
      <p>{{description}}</p>
      <ul>
        <li>{{inlineTemplateDescription}}</li>
        <li>{{inlineStyleDescription}}</li>
        <li>{{skypTestDescription}}</li>
      </ul>
</div>
  `,
  styles: `
  .box {
    border: 1px solid black;
    margin: 1rem;
    padding: 1rem;
  }
  `
})
export class AppComponenteInline {
  title = "app-componente-inline works!";
  description ="Comando para crear componente inline: g c app-componente-inline --inline-template --inline-style --skip-tests";
  inlineTemplateDescription = "--inline-template: No se genera el archivo html";
  inlineStyleDescription = "--inline-style: No se genera el archivo css";
  skypTestDescription = "--skip-tests: No se genera el archivo de test";
}
