import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppMeetingRoomListPageRoutingModule } from './app-meeting-room-list-routing.module';

import { AppMeetingRoomListPage } from './app-meeting-room-list.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    AppMeetingRoomListPageRoutingModule
  ],
  declarations: [AppMeetingRoomListPage]
})
export class AppMeetingRoomListPageModule {}
