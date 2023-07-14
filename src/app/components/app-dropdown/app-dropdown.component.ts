/* eslint-disable max-lines */
import {
  Component, OnInit, Input, EventEmitter, Output
} from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './app-dropdown.component.html',
  styleUrls: ['./app-dropdown.component.scss']
})
export class AppDropdownComponent implements OnInit {
  @Input() label = [];

  @Input() customAlertOptions = {
    cssClass: 'select-parent-container'
  };

  @Input() data: any = [];

  @Input() defaultValue = '';

  @Input() isMultiSelect = false;

  @Output() ngDropdownValueChange: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}

  onValueChange(event: any) {
    const selectedDropdownObj = this.data.find((dropDownObj: any) => dropDownObj.value === event.detail.value);
    this.ngDropdownValueChange.emit(selectedDropdownObj);
  }
}
