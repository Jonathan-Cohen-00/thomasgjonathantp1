import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartLogo } from './part-logo';

describe('PartLogo', () => {
  let component: PartLogo;
  let fixture: ComponentFixture<PartLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartLogo],
    }).compileComponents();

    fixture = TestBed.createComponent(PartLogo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
