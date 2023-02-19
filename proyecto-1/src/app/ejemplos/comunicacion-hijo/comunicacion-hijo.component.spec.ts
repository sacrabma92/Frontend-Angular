import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacionHijoComponent } from './comunicacion-hijo.component';

describe('ComunicacionHijoComponent', () => {
  let component: ComunicacionHijoComponent;
  let fixture: ComponentFixture<ComunicacionHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacionHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComunicacionHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
