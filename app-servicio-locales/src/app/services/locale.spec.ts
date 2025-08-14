import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LocaleService } from '../../app/services/locale';

describe('LocaleService', () => {
  let service: LocaleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocaleService],
    });

    service = TestBed.inject(LocaleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should set translations to {} if HTTP returns null', async () => {
    const promise = service.loadTranslations();

    const req = httpMock.expectOne('assets/locales/locales.json');
    req.flush(null); // simulamos que la respuesta es null

    await promise;

    expect(service['translations']).toEqual({});
  });

  it('should set translations correctly if HTTP returns data', async () => {
    const data = { 'app-saludo-inicial': 'Hola mundo' };
    const promise = service.loadTranslations();

    const req = httpMock.expectOne('assets/locales/locales.json');
    req.flush(data);

    await promise;

    expect(service['translations']).toEqual(data);
  });
});
