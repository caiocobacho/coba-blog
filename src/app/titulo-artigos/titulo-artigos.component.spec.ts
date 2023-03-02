import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloArtigosComponent } from './titulo-artigos.component';

describe('TituloArtigosComponent', () => {
  let component: TituloArtigosComponent;
  let fixture: ComponentFixture<TituloArtigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloArtigosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloArtigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
