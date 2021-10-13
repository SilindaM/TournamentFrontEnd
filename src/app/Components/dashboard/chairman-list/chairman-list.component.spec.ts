import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanListComponent } from './chairman-list.component';

describe('ChairmanListComponent', () => {
  let component: ChairmanListComponent;
  let fixture: ComponentFixture<ChairmanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChairmanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairmanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
