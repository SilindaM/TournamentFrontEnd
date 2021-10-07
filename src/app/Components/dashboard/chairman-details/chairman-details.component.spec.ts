import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanDetailsComponent } from './chairman-details.component';

describe('ChairmanDetailsComponent', () => {
  let component: ChairmanDetailsComponent;
  let fixture: ComponentFixture<ChairmanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChairmanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairmanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
