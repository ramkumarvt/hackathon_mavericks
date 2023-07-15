import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppRoomStatusPageRoutingModule } from './app-room-status-routing.module';

import { AppRoomStatusPage } from './app-room-status.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AppRoomStatusPageRoutingModule
  ],
  declarations: [AppRoomStatusPage]
})
export class AppRoomStatusPageModule {}
