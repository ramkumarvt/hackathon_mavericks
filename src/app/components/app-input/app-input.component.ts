/* eslint-disable @typescript-eslint/no-unused-expressions */
import {
  Component, EventEmitter, forwardRef, HostListener, Input, Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Keyboard } from '@capacitor/keyboard';
// import { isValidEmail as EmailValidation } from 'src/app/_core/helpers/helper';
// import { LocalStorageKeys } from 'src/app/_core/constant/local-storage.constant';

export interface Rules {
  validation?: string;
  customValidation?: Function;
  required?: boolean;
  regex?: RegExp;
  max?: number;
  min?: number;
}

export enum Validation {
  ValidEmail = 'isValidEmail'
}

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => AppInputComponent)
    }
  ]
})

export class AppInputComponent implements ControlValueAccessor {
  errorText: string = '';

  @Input() labelPosition = 'stacked';

  @Input() ngModel: string = '';

  @Input() placeholder: string = '';

  @Input() type = 'text';

  @Input() readOnly: boolean = false;

  @Input() disabled: boolean = false;

  @Input() label = '';

  @Input() name: string = '';

  @Input() id: any;

  @Input() icon: any;

  @Input() rules: Rules = {};

  @Output() ngModelChange = new EventEmitter<string>();

  @Input() debounce: any;

  @Output() triggerFocus = new EventEmitter<any>();

  /**
     * Selected model should be emitted
     * @param event - The event triggered on input event
     */
  inputHandler(event: any) {
    this.ngModelChange.emit(event.target.value);
  }

  onFocus(event: any) {
    // const deviceInfo = JSON.parse(localStorage.getItem(LocalStorageKeys.DeviceInfo));
    // deviceInfo.platform === 'ios' && Keyboard.setScroll({ isDisabled: false });
    this.triggerFocus.emit(event);
  }

  ionInput(event: any) {
    const inputValue = event.target.value;
    const newValue = inputValue.replace(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g, '');
    event.target.value = newValue;
  }

  /**
    * Selected input should be validated
    * @param event - The event triggered on blur event
    */
  blurHandler(event: any) {
    this.errorText = '';
    if (this.rules
        && this.rules.customValidation && !this.rules.customValidation(event.target.value)) {
      this.errorText = `${this.label} should be valid format`;
    } 
    // else if (this.rules && this.rules.validation
    //     && !this[Validation[this.rules.validation]](event.target.value)) {
    //   this.errorText = `${this.label} should be valid format`;
    // } 
    else if (this.rules && this.rules.required && (event.target.value === '' || event.target.value === null)) {
      this.errorText = 'Required';
    }
  }

  /**
    * Typed input should be validated for valid email
    * @param value - The value triggered on validation changes
    */
  // isValidEmail(value: string) {
  //   return EmailValidation(value);
  // }

  /**
    * Selected model should be set to ngModel
    * @param obj - The obj triggered on input changes
    */
  writeValue(obj: any): void {
    this.ngModel = obj;
  }

  /**
    * Default method for ControlValueAccessor
    */
  registerOnChange(): void { }

  /**
    * Default method for ControlValueAccessor
    */
  registerOnTouched(): void { }
}
