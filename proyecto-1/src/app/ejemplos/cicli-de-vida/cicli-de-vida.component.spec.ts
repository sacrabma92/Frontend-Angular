import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicliDeVidaComponent } from './cicli-de-vida.component';

describe('CicliDeVidaComponent', () => {
  let component: CicliDeVidaComponent;
  let fixture: ComponentFixture<CicliDeVidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicliDeVidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicliDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
