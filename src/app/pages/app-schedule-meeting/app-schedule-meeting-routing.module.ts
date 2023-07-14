import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppScheduleMeetingPage } from './app-schedule-meeting.page';

const routes: Routes = [
  {
    path: '',
    component: AppScheduleMeetingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppScheduleMeetingPageRoutingModule {}
