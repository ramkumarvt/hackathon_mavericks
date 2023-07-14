import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppScheduleMeetingPageRoutingModule } from './app-schedule-meeting-routing.module';

import { AppScheduleMeetingPage } from './app-schedule-meeting.page';
import { SharedModule } from 'src/app/shared.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxMaterialTimepickerModule,
    SharedModule,
    AppScheduleMeetingPageRoutingModule
  ],
  declarations: [AppScheduleMeetingPage]
})
export class AppScheduleMeetingPageModule {}
