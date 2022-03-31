import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveWidgetComponent } from './drive-widget.component';

describe('DriveWidgetComponent', () => {
  let component: DriveWidgetComponent;
  let fixture: ComponentFixture<DriveWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriveWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
