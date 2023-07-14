import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-meeting-room',
  templateUrl: './add-meeting-room.component.html',
  styleUrls: ['./add-meeting-room.component.scss'],
})
export class AddMeetingRoomComponent  implements OnInit {

  data: any = {};

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  addMeetinRoom() {
    console.log(this.data);
  }

  closePopup() {
    this.modalController.dismiss();
  }

}
