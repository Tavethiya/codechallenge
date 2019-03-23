import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourViewComponent } from './hours-view.component';

describe('HourViewComponent', () => {
  let component: HourViewComponent;
  let fixture: ComponentFixture<HourViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HourViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
