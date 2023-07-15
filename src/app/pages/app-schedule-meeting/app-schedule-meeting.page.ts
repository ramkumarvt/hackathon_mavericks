import { Component, OnInit } from '@angular/core';

import lineItemJson from '../../json/meeting_room_list.json';

import scheduleJson from '../../json/schedule-list.json';

import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

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

  data: any = {};

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  
  ionViewWillEnter() {
    console.log(lineItemJson.meeting_room_list);
    this.floorRooms = lineItemJson.meeting_room_list.reduce((obj: any, room: any) => {
      console.log(room);
      if(obj[room.floor]) obj[room.floor].push(room)
      else obj[room.floor] = [room]
      return obj;
    }, {});
    console.log(this.floorRooms);
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
    if( this.totalMembers) this.availableRooms = this.floorRooms[this.selectedFloor.value].filter((room: any) => room.maximumCapacity >= this.totalMembers)
    else this.availableRooms = [];
  }

  onTimeChange(event: any, key: string) {
    console.log(event, key);
    this.data[key] = event;
  }

  scheduleRoom() {
    // console.log(this.data, this.selectedRoom, this.selectedFloor)
    const request = {
      ...this.data,
      totalMembers: this.totalMembers,
      ...this.selectedRoom,
      roomId: this.selectedRoom.id,
      id: this.getUUID()
    };
    scheduleJson.scheduled_list.push(request);
    console.log(scheduleJson.scheduled_list, request)
    this.router.navigate(['tabs/app-room-status']);
  }

  getUUID() {
    return uuidv4();
  }
}

