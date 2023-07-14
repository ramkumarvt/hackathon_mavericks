import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
    {
      path: 'app-meeting-room-list',
      loadChildren: () => import('../pages/app-meeting-room-list/app-meeting-room-list.module').then( m => m.AppMeetingRoomListPageModule)
    },
      {
        path: 'app-schedule-meeting',
        loadChildren: () => import('../pages/app-schedule-meeting/app-schedule-meeting.module').then( m => m.AppScheduleMeetingPageModule)
      },
      {
        path: 'app-room-status',
        loadChildren: () => import('../pages/app-room-status/app-room-status.module').then( m => m.AppRoomStatusPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/app-room-status',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/app-room-status',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
