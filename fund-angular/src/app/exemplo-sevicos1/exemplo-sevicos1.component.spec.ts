import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploSevicos1Component } from './exemplo-sevicos1.component';

describe('ExemploSevicos1Component', () => {
  let component: ExemploSevicos1Component;
  let fixture: ComponentFixture<ExemploSevicos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploSevicos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploSevicos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
