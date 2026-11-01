import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitxaProducteComponent } from './fitxa-producte-component';

describe('FitxaProducteComponent', () => {
  let component: FitxaProducteComponent;
  let fixture: ComponentFixture<FitxaProducteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitxaProducteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FitxaProducteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
