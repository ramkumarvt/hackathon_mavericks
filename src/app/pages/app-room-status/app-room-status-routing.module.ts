import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoomStatusPage } from './app-room-status.page';

const routes: Routes = [
  {
    path: '',
    component: AppRoomStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoomStatusPageRoutingModule {}
