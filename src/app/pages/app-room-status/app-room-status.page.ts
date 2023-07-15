import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-room-status',
  templateUrl: './app-room-status.page.html',
  styleUrls: ['./app-room-status.page.scss'],
})
export class AppRoomStatusPage implements OnInit {

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

  roomData: any = {
    floor1: [
      {
        label: 'VT 01',
        value: 'vt01',
        disabled: false,
        id: 1
      },{
        label: 'VT 02',
        value: 'vt02',
        disabled: false,
        id: 2
      },{
        label: 'VT 03',
        value: 'vt03',
        disabled: false,
        id: 3
      },
    ],
    floor2: [
      {
        label: 'VT 04',
        value: 'vt04',
        disabled: false,
        id: 4
      },{
        label: 'VT 05',
        value: 'vt05',
        disabled: false,
        id: 5
      }
    ],
    floor3: [
      {
        label: 'VT 06',
        value: 'vt06',
        disabled: false,
        id: 6
      },{
        label: 'VT 07',
        value: 'vt07',
        disabled: false,
        id: 7
      }
    ],
  };

  selectedFloor: any;

  constructor() { }

  ngOnInit() {
    this.selectedFloor = { ...this.dropDownData.at(0) }
  }


  onFloorChange(event: any) {
    console.log(event);
    this.selectedFloor = { ...event };
  }

}
