import { forwardRef } from '@angular/core';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Plugins } from '@capacitor/core';
import { IonicModule } from '@ionic/angular';

import { AppInputComponent } from './app-input.component';

describe('AppInputComponent', () => {
  let component: AppInputComponent;
  let fixture: ComponentFixture<AppInputComponent>;
  let inputElement: HTMLInputElement;
  let injector;
  let mockAccessor;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppInputComponent],
      imports: [IonicModule],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          multi: true,
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          useExisting: forwardRef(() => AppInputComponent)
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppInputComponent);
    injector = getTestBed();
    // mockAccessor = injector.inject(NG_VALUE_ACCESSOR);
    // forwardRef(() => AppInputComponent);
    component = fixture.componentInstance;
    inputElement = fixture.nativeElement.querySelector('ion-input');
    fixture.detectChanges();
  }));

  afterEach(() => {
    component = null;
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have valid attribute', async(() => {
    component.id = 'inputId';
    component.readOnly = true;
    component.disabled = true;
    component.ngModel = 'value';
    component.name = 'input';
    component.type = 'text';
    fixture.detectChanges();

    expect(inputElement.id).toEqual(component.id);
    expect(inputElement.getAttribute('readOnly')).toEqual('true');
    expect(inputElement.getAttribute('disabled')).toEqual('true');
    expect(inputElement.getAttribute('type')).toEqual(component.type);
    expect(inputElement.getAttribute('name')).toEqual(component.name);
    expect(inputElement.value).toEqual(component.ngModel);
  }));

  it('should render label element', () => {
    component.label = 'label';
    fixture.detectChanges();
    const labelElement:HTMLIonLabelElement = fixture.nativeElement.querySelector('#inputLabel');

    expect(labelElement.innerHTML.trim()).toEqual(component.label);
  });

  describe('methods', () => {
    const event = { target: { value: 'text' } };

    describe('blurHandler()', () => {
      let element: HTMLIonTextElement;
      beforeEach(() => {
        element = fixture.nativeElement.querySelector('#inputErrorMsg');
      });

      describe('@Input rules customValidation', () => {
        it('should render error text message node when rules custom validation fails', () => {
          component.label = 'label';
          component.rules = {
            customValidation: (_) => false
          };
          component.blurHandler(event);
          fixture.detectChanges();

          expect(component.errorText).toEqual('label should be valid format');
        });

        it('should not print error message', () => {
          component.label = 'label';
          component.rules = {
            customValidation: (_) => true
          };
          component.blurHandler(event);
          fixture.detectChanges();

          expect(element.innerText).toEqual('');
        });
      });

      describe('@Input rules validation', () => {
        beforeEach(() => {
          component.label = 'label';
          component.rules = {
            validation: 'ValidEmail'
          };
        });

        it('should validate and print error if rules has validation method isValidEmail is failed', () => {
          event.target.value = 'text';
          component.blurHandler(event);
          fixture.detectChanges();

          expect(component.errorText).toEqual('label should be valid format');
        });

        it('should validate if rules has validation method isValidEmail is passed', () => {
          event.target.value = 'test@test.com';
          component.blurHandler(event);
          fixture.detectChanges();

          expect(element.innerText).toEqual('');
        });
      });
    });

    describe('inputHandler()', () => {
      it('should emit ngModelChange and input event emitter', () => {
        const spy = spyOn(component.ngModelChange, 'emit');
        // const spy = spyOn(component.input, 'emit');

        component.inputHandler(event);

        // expect(component.input.emit).toHaveBeenCalledWith(event.target.value);
        expect(spy).toHaveBeenCalledWith(event.target.value);
      });
    });

    describe('writeValue()', () => {
      it('should set value to the ngModel', () => {
        component.writeValue('test');
        component.registerOnChange();
        component.registerOnTouched();

        expect(component.ngModel).toEqual('test');
      });
    });

    xdescribe('onFocus', () => {
      const options = {
          isDisabled: false
      }
      it('trigger on focus on the input', () => {
        spyOn(Plugins.Keyboard, 'setScroll');
        const spy = spyOn(component.triggerFocus, 'emit');

        component.onFocus(event);

        // expect(component.input.emit).toHaveBeenCalledWith(event.target.value);
        expect(spy).toHaveBeenCalledWith(event);
      });
    });
  });
});
