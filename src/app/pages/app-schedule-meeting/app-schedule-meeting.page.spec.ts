import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppScheduleMeetingPage } from './app-schedule-meeting.page';

describe('AppScheduleMeetingPage', () => {
  let component: AppScheduleMeetingPage;
  let fixture: ComponentFixture<AppScheduleMeetingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppScheduleMeetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
