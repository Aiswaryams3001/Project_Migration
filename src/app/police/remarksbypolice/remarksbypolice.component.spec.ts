import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksbypoliceComponent } from './remarksbypolice.component';

describe('RemarksbypoliceComponent', () => {
  let component: RemarksbypoliceComponent;
  let fixture: ComponentFixture<RemarksbypoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemarksbypoliceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemarksbypoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
