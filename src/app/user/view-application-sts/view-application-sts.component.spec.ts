import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApplicationStsComponent } from './view-application-sts.component';

describe('ViewApplicationStsComponent', () => {
  let component: ViewApplicationStsComponent;
  let fixture: ComponentFixture<ViewApplicationStsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewApplicationStsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewApplicationStsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
