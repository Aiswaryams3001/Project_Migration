import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceLayoutComponent } from './police-layout.component';

describe('PoliceLayoutComponent', () => {
  let component: PoliceLayoutComponent;
  let fixture: ComponentFixture<PoliceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
