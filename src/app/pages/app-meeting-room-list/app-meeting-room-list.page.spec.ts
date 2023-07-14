import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMeetingRoomListPage } from './app-meeting-room-list.page';

describe('AppMeetingRoomListPage', () => {
  let component: AppMeetingRoomListPage;
  let fixture: ComponentFixture<AppMeetingRoomListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppMeetingRoomListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
