import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoArtigosComponent } from './botao-artigos.component';

describe('BotaoArtigosComponent', () => {
  let component: BotaoArtigosComponent;
  let fixture: ComponentFixture<BotaoArtigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoArtigosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoArtigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
