import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRegComponent } from './application-reg.component';

describe('ApplicationRegComponent', () => {
  let component: ApplicationRegComponent;
  let fixture: ComponentFixture<ApplicationRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
