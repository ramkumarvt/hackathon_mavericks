import { Component } from '@angular/core';
import {
  async, ComponentFixture, TestBed, waitForAsync
} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppButtonComponent } from './app-button.component';

@Component({
  template: `
  <app-button id="primaryBtn" is-primary></app-button>
  <app-button id="secondaryBtn" is-secondary></app-button>
  <app-button id="blockBtn" expand='block'></app-button>
  `
})
class TestComponent { }

describe('AppButtonComponent', () => {
  let component: AppButtonComponent;
  let fixture: ComponentFixture<AppButtonComponent>;
  let testComponent: TestComponent;
  let testComponentFixture: ComponentFixture<TestComponent>;
  let buttonElement: HTMLButtonElement;
  const mockMouseEvent = new MouseEvent('');

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppButtonComponent, TestComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppButtonComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.nativeElement.querySelector('ion-button');
    fixture.detectChanges();
  }));

  afterEach(() => {
    component = null;
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('props', () => {
    it('should set attribute id if prop id has value', () => {
      component.id = 'mockButton';
      fixture.detectChanges();

      expect(buttonElement.id).toEqual('mockButton');
    });

    it('should append class attribute value if prop class has value', () => {
      component.class = 'mockClass';
      fixture.detectChanges();

      expect(buttonElement.classList.contains('mockClass')).toBeTrue();
    });

    it('should append button class to class variable', () => {
      const mockComponentClass = new AppButtonComponent(
        true, false, true, false, false, true, false
      );

      expect(mockComponentClass.class.includes('button')).toBeFalsy();
    });
  });

  describe('Component UI Test', () => {
    beforeEach(() => {
      // Test component for UI testing;
      testComponentFixture = TestBed.createComponent(TestComponent);
      testComponent = testComponentFixture.componentInstance;
      testComponentFixture.detectChanges();
    });

    it('should add "is-primary" class to ion-button', () => {
      expect(testComponentFixture.nativeElement.querySelector('#primaryBtn ion-button').classList.contains('is-primary')).toBeTrue();
    });

    it('should add "is-secondary" class to ion-button', () => {
      expect(testComponentFixture.nativeElement.querySelector('#secondaryBtn ion-button').classList.contains('is-secondary')).toBeTrue();
    });
  });
});
