import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanEditComponent } from './chairman-edit.component';

describe('ChairmanEditComponent', () => {
  let component: ChairmanEditComponent;
  let fixture: ComponentFixture<ChairmanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChairmanEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairmanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
