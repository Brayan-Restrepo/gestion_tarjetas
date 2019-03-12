import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConsumoComponent } from './list-consumo.component';

describe('ListConsumoComponent', () => {
  let component: ListConsumoComponent;
  let fixture: ComponentFixture<ListConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
