import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-meeting-room',
  templateUrl: './add-meeting-room.component.html',
  styleUrls: ['./add-meeting-room.component.scss'],
})
export class AddMeetingRoomComponent  implements OnInit {

  data: any = {};

  dropDownData: any = [{
    label: 'Floor 1',
    value: 'floor1',
    disabled: false,
    id: 1
  },
  {
    label: 'Floor 2',
    value: 'floor2',
    disabled: false,
    id: 2
  },
  {
    label: 'Floor 3',
    value: 'floor3',
    disabled: false,
    id: 3
  }];

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.data.floor = 'floor1';
  }

  addMeetinRoom() {
    console.log(this.data);
    this.modalController.dismiss(this.data);
  }

  closePopup() {
    this.modalController.dismiss();
  }

  onFloorChange(event: any) {
    this.data.floor = event.value;
  } 

}
