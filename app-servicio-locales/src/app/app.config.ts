import { ApplicationConfig, inject } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideAppInitializer } from '@angular/core';
import { LocaleService } from './services/locale';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    // Carga el locales.json ANTES de que se pinte la app
    provideAppInitializer(() => {
      const locale = inject(LocaleService);
      return locale.loadTranslations(); // puede devolver Promise/Observable
    })
  ]
};
