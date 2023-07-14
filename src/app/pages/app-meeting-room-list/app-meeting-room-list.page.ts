import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddMeetingRoomComponent } from 'src/app/components/add-meeting-room/add-meeting-room.component';

@Component({
  selector: 'app-app-meeting-room-list',
  templateUrl: './app-meeting-room-list.page.html',
  styleUrls: ['./app-meeting-room-list.page.scss'],
})
export class AppMeetingRoomListPage implements OnInit {

  constructor(
    private modalControl: ModalController
  ) { }

  ngOnInit() {
  }

  async addRoom() {
    try {
      const modalPopup = await this.modalControl.create({
        component: AddMeetingRoomComponent,
        backdropDismiss: false,
        cssClass: 'picker-container',
        id: 'app-circuit-selection',
        componentProps: {
          header: 'Circuit Selection',
          showLeftIcon: false
        }
      });
      modalPopup.present();
    } catch(error) {
      throw error;
    }
  }

}
