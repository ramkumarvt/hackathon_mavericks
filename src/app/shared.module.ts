import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { AppButtonComponent } from './components/app-button/app-button.component';
import { AddMeetingRoomComponent } from './components/add-meeting-room/add-meeting-room.component';
import { AppModalHeaderComponent } from './components/app-modal-header/app-modal-header.component';
import { AppInputComponent } from './components/app-input/app-input.component';
import { AppDropdownComponent } from './components/app-dropdown/app-dropdown.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    HeaderComponent,
    AppButtonComponent,
    AppModalHeaderComponent,
    AppInputComponent,
    AppDropdownComponent,
    AddMeetingRoomComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    AppButtonComponent,
    AppModalHeaderComponent,
    AppInputComponent,
    AppDropdownComponent,
    AddMeetingRoomComponent
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule {
  constructor() {
  }
}
