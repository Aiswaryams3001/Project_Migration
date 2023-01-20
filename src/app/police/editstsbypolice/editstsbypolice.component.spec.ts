import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstsbypoliceComponent } from './editstsbypolice.component';

describe('EditstsbypoliceComponent', () => {
  let component: EditstsbypoliceComponent;
  let fixture: ComponentFixture<EditstsbypoliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditstsbypoliceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditstsbypoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
