import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFraisHFComponent } from './ajouter-frais-hf.component';

describe('AjouterFraisHFComponent', () => {
  let component: AjouterFraisHFComponent;
  let fixture: ComponentFixture<AjouterFraisHFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFraisHFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFraisHFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
