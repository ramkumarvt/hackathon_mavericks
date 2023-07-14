import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppModalHeaderComponent } from './app-modal-header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppModalHeaderComponent', () => {
    let component: AppModalHeaderComponent;
    let fixture: ComponentFixture<AppModalHeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppModalHeaderComponent],
            imports: [IonicModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
      
        fixture = TestBed.createComponent(AppModalHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('method', () => {
        describe('uiClosePopup()', () => {
            it('should emit the closePopup method', () => {
                spyOn(component.closePopup, 'emit');
                component.uiClosePopup();
                expect(component.closePopup.emit).toHaveBeenCalled();
            })
        });
    });
});