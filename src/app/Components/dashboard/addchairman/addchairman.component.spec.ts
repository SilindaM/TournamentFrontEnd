import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddchairmanComponent } from './addchairman.component';

describe('AddchairmanComponent', () => {
  let component: AddchairmanComponent;
  let fixture: ComponentFixture<AddchairmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddchairmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddchairmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
