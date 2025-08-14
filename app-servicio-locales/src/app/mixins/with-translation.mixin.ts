import { inject } from '@angular/core';
import { LocaleService } from '../services/locale';

type Ctor<T = object> = new (...args: any[]) => T;

export function WithTranslation<TBase extends Ctor>(Base: TBase) {
  return class extends Base {
    protected readonly __locale = inject(LocaleService);

    t(key: string): string {
      return this.__locale.t(key);
    }
  };
}
