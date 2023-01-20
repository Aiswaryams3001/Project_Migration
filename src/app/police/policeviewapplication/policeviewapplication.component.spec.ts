import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceviewapplicationComponent } from './policeviewapplication.component';

describe('PoliceviewapplicationComponent', () => {
  let component: PoliceviewapplicationComponent;
  let fixture: ComponentFixture<PoliceviewapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceviewapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceviewapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
