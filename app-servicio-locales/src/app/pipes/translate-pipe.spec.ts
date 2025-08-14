// src/tests/pipes/translate.pipe.spec.ts
import { TranslatePipe } from '../../app/pipes/translate-pipe';
import { LocaleService } from '../../app/services/locale';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('TranslatePipe', () => {
  let service: LocaleService;
  let pipe: TranslatePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocaleService]
    });

    service = TestBed.inject(LocaleService);
    // Sobrescribimos traducciones para test
    service['translations'] = { 'app-saludo-inicial': 'Hola mundo' };

    // Pipe no se inyecta, se instancia manualmente
    pipe = new TranslatePipe(service);
  });

  it('should translate existing keys', () => {
    expect(pipe.transform('app-saludo-inicial')).toBe('Hola mundo');
  });

  it('should return key if translation does not exist', () => {
    expect(pipe.transform('clave-inexistente')).toBe('clave-inexistente');
  });
});
