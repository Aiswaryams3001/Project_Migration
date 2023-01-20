import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceviewmoreComponent } from './policeviewmore.component';

describe('PoliceviewmoreComponent', () => {
  let component: PoliceviewmoreComponent;
  let fixture: ComponentFixture<PoliceviewmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceviewmoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceviewmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
