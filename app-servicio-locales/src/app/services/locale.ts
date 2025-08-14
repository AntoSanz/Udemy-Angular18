import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LocaleService {
  private translations: Record<string, string> = {};
  constructor(private http: HttpClient) {}
  loadTranslations(): Promise<void> {
    return firstValueFrom(
      this.http.get<Record<string, string>>('assets/locales/locales.json')
    ).then((data) => {
      this.translations = data ?? {};
    });
  }
  t(key: string): string {
    return this.translations[key] ?? key;
  }
}
