import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionStorag2Component } from './session-storag2.component';

describe('SessionStorag2Component', () => {
  let component: SessionStorag2Component;
  let fixture: ComponentFixture<SessionStorag2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionStorag2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionStorag2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
