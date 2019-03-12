import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClinetesComponent } from './list-clinetes.component';

describe('ListClinetesComponent', () => {
  let component: ListClinetesComponent;
  let fixture: ComponentFixture<ListClinetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClinetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClinetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
