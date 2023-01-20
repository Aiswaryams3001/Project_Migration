import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserviewmoreComponent } from './userviewmore.component';

describe('UserviewmoreComponent', () => {
  let component: UserviewmoreComponent;
  let fixture: ComponentFixture<UserviewmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserviewmoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserviewmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
