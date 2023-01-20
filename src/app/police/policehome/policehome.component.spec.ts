import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicehomeComponent } from './policehome.component';

describe('PolicehomeComponent', () => {
  let component: PolicehomeComponent;
  let fixture: ComponentFixture<PolicehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicehomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
