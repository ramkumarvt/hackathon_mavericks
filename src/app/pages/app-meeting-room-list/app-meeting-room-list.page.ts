import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import lineItemJson from '../../json/meeting_room_list.json';
import { AddMeetingRoomComponent } from 'src/app/components/add-meeting-room/add-meeting-room.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-app-meeting-room-list',
  templateUrl: './app-meeting-room-list.page.html',
  styleUrls: ['./app-meeting-room-list.page.scss'],
})
export class AppMeetingRoomListPage implements OnInit {

  roomLists: any = lineItemJson.meeting_room_list ?? [];

  constructor(
    private modalControl: ModalController
  ) { }

  ngOnInit() {
    console.log(lineItemJson);
    this.roomLists =  lineItemJson.meeting_room_list;
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

      modalPopup.onDidDismiss().then(({ data }) => {
        console.log(data);
        if(data) {
          // lineItemJson.meeting_room_list.push(data);
          const room = {
            id: this.getUUID(),
            ...data
          };
          console.log(room);
          this.roomLists.push(data);
        }
      })
    } catch(error) {
      throw error;
    }
  }

  getUUID() {
    return uuidv4();
  }

}
