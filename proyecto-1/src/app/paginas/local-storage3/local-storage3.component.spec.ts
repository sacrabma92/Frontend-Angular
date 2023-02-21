import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorage3Component } from './local-storage3.component';

describe('LocalStorage3Component', () => {
  let component: LocalStorage3Component;
  let fixture: ComponentFixture<LocalStorage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalStorage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalStorage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
