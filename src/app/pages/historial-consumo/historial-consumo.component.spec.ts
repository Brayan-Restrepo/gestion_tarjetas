import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialConsumoComponent } from './historial-consumo.component';

describe('HistorialConsumoComponent', () => {
  let component: HistorialConsumoComponent;
  let fixture: ComponentFixture<HistorialConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
