import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocaleService } from '../../app/services/locale';
import { WithTranslation } from '../../app/mixins/with-translation.mixin';

@Component({
  template: '',
  standalone: true
})
class DummyComponent extends WithTranslation(class {}) {}

describe('WithTranslation Mixin', () => {
  let service: LocaleService;
  let component: DummyComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DummyComponent, HttpClientTestingModule], // ✅ Importar módulo de testing HTTP
      providers: [LocaleService],
    }).compileComponents();

    service = TestBed.inject(LocaleService);
    // Sobreescribimos las traducciones para no hacer requests reales
    service['translations'] = { 'app-saludo-inicial': 'Hola mundo' };

    const fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
  });

  it('should translate existing keys', () => {
    expect(component.t('app-saludo-inicial')).toBe('Hola mundo');
  });

  it('should return key if translation does not exist', () => {
    expect(component.t('clave-inexistente')).toBe('clave-inexistente');
  });
});
