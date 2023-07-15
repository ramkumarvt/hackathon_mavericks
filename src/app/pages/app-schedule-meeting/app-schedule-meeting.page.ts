import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-schedule-meeting',
  templateUrl: './app-schedule-meeting.page.html',
  styleUrls: ['./app-schedule-meeting.page.scss'],
})
export class AppScheduleMeetingPage implements OnInit {

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

  floorRooms: any = {
    floor1: [{
      id: 1,
      value: 'V007',
      maximumCapacity: 5
    }, {
      id: 2,
      value: 'V008',
      maximumCapacity: 8
    }],
    floor2: [{
      id: 1,
      value: 'V107',
      maximumCapacity: 3
    }, {
      id: 2,
      value: 'V108',
      maximumCapacity: 7
    }],
    floor3: [{
      id: 1,
      value: 'V307',
      maximumCapacity: 4
    }, {
      id: 2,
      value: 'V308',
      maximumCapacity: 2
    }]
  };

  selectedFloor: any = {
    label: 'Floor 1',
    value: 'floor1',
    disabled: false,
    id: 1
  };

  availableRooms: any = [];

  selectedRoom: any = {};

  totalMembers:any = null;

  constructor() { }

  ngOnInit() {
  }

  onFloorChange(event: any) {
    console.log(event);
    this.selectedFloor = { ...event };
    console.log(this.availableRooms);
    this.totalMembers = null;
    this.selectedRoom = {};
  }

  onRoomSelect(floor: any) {
    console.log(floor);
    this.selectedRoom = {...floor};
  }

  setAvailabeRooms() {
    this.selectedRoom = {};
    if( this.totalMembers) this.availableRooms = this.floorRooms[this.selectedFloor.value].filter((room: any) => room.maximumCapacity > this.totalMembers)
    else this.availableRooms = [];
  }

  scheduleRoom() {

  }
}
