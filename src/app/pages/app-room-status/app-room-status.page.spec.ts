import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoomStatusPage } from './app-room-status.page';

describe('AppRoomStatusPage', () => {
  let component: AppRoomStatusPage;
  let fixture: ComponentFixture<AppRoomStatusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppRoomStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
