import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheFraisHFComponent } from './fiche-frais-hf.component';

describe('FicheFraisHFComponent', () => {
  let component: FicheFraisHFComponent;
  let fixture: ComponentFixture<FicheFraisHFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheFraisHFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheFraisHFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
