import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  appMenus = [
    {
      id: 1, tabName: 'Meeting Rooms', icon: '/assets/icon/bottom-nav/dashboard.svg', path: '/tabs/app-meeting-room-list'
    },{
      id: 2, tabName: 'Schedule Room', icon: '/assets/icon/bottom-nav/audit.svg', path: '/tabs/app-schedule-meeting', className: ''
    }, {
      id: 3, tabName: 'Track Room', icon: '/assets/icon/bottom-nav/audit.svg', path: '/tabs/app-room-status', className: ''
    }
  ];

  pathName: any;


  highlightTab: any = 1;

  constructor(
    public router: Router,
    public menuCtrl: MenuController
  ) {}

   // tab bar and path selection
   async tabSelection({ id, path }: any, event: any) {
    if (id !== 5 && path) {
      this.highlightTab = id;
      this.pathName = path;
      const routeName = this.pathName.split('/');
      this.router.navigate([`${this.pathName}`]);
      this.menuCtrl.close();
    } 
  }

  closeMenu() {
    this.menuCtrl.close();
  }

}
