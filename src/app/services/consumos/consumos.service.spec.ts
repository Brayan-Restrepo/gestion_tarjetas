import { TestBed } from '@angular/core/testing';

import { ConsumosService } from './consumos.service';

describe('ConsumosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumosService = TestBed.get(ConsumosService);
    expect(service).toBeTruthy();
  });
});
