import { Pipe, PipeTransform } from '@angular/core';
import { LocaleService } from '../services/locale';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // útil si más adelante cambias de idioma en vivo
})
export class TranslatePipe implements PipeTransform {
  constructor(private locale: LocaleService) {}
  transform(key: string): string {
    return this.locale.t(key);
  }
}
