import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstsComponent } from './editsts.component';

describe('EditstsComponent', () => {
  let component: EditstsComponent;
  let fixture: ComponentFixture<EditstsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditstsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditstsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
