import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header.component';
import { HeaderService } from 'src/app/_services/header.service';
import { AuditSyncService } from 'src/app/_services/audit-sync.service';
import { AlertService } from 'src/app/_services/alert.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppProfileInformationComponent } from '../app-profile-information/app-profile-information.component';
import { AppAuditSyncComponent } from '../app-audit-sync/app-audit-sync.component';
import { AppGeolocationComponent } from '../app-geolocation/app-geolocation.component';
import { UserService } from 'src/app/_services/user.service';
import { PermissionService } from 'src/app/_services/permission.service';

const mockUserData = {
  userId: 1
};

const mockRole = {
  data : [{
    roleId: 1
  }]
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockModalService: any;
  let mockModalController: any;
  let mockHeaderService: any;
  let mockAuditSyncService: any;
  let mockAlertService: any;
  let activateRouteSpy;
  let headerService;
  let modalSpy;
  let auditSyncService;
  let mockUserService;
  let mockPermissionService;

  beforeEach(async(() => {
    mockModalService = jasmine.createSpyObj('ModalService', [
      ''
    ]);
    modalSpy = jasmine.createSpyObj('Modal', ['present', 'onDidDismiss']);
    mockModalController = jasmine.createSpyObj('ModalController', [
      'create'
    ]);
    mockModalController.create.and.callFake(() => modalSpy);
    // mockHeaderService = jasmine.createSpyObj('HeaderService', [
    //   'output'
    // ]);
    mockAuditSyncService = jasmine.createSpyObj('AuditSyncService', [
      ''
    ]);
    mockAlertService = jasmine.createSpyObj('AlertService', [
      'warning'
    ]);
    activateRouteSpy = jasmine.createSpyObj('ActivatedRoute', [
      'snapshot'
    ]);
    activateRouteSpy = {
      snapshot: {
        paramMap : {
          get: jasmine.createSpy().and.returnValue(true)
        }
      }
    };
    mockPermissionService = jasmine.createSpyObj('PermissionService', [
      'fetchRoles'
    ]);
    mockUserService = jasmine.createSpyObj('UserService', [
      'fetchLoggedUserDetail'
    ]);

    mockUserService.fetchLoggedUserDetail.and.returnValue(mockUserData);
    mockPermissionService.fetchRoles.and.returnValue(mockRole);

    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [IonicModule],
      providers : [
        // AuditSyncService,
        { provide: ModalController, useValue: mockModalController },
        // { provide: HeaderService, useValue: mockHeaderService },
        { provide: ActivatedRoute, useValue: activateRouteSpy },
        { provide: AuditSyncService, useValue: mockAuditSyncService },
        { provide: AlertService, useValue: mockAlertService },
        { provide: PermissionService, useValue: mockPermissionService },
        { provide: UserService, useValue: mockUserService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    headerService = TestBed.inject(HeaderService);
    // auditSyncService = TestBed.inject(AuditSyncService);
    component = fixture.componentInstance;
    headerService.outputEmitter.next({autoSave: false});
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getters', () => {
    describe('syncUserAuditCount', () => {
      const mockUserAuditList = [
        {
          id: 1,
          syncStatus: 1
        },
        {
          id: 2,
          syncStatus: 7
        }
      ];
      it('should get the audit list count', () => {
        (component as any).auditSyncService.userAuditList = mockUserAuditList;
        let result = component.syncUserAuditCount;
        expect(result).toEqual(1);
      });
    });

    describe('disableGeoLocation', () => {
      it('shoud return status of geolocation', () => {
        component.headerValues = {
          geolocation: {
            disableGeoLocation: true
          },
          autoSave: 'false',
          filterValues: null
        };
        let result = component.disableGeoLocation;
        expect(result).toEqual(true);
      });

      it('should return undefined when geolocation is null', () => {
        component.headerValues = {
          geolocation: null,
          autoSave: 'false',
          filterValues: null
        };
        let result = component.disableGeoLocation;
        expect(result).toBeUndefined();
      });

      it('should return undefined when headerValues is null', () => {
        component.headerValues = null;
        let result = component.disableGeoLocation;
        expect(result).toBeUndefined();
      })
    });

    describe('brandImage', () => {
      it('should return undefined when headerService is null', () => {
        (component as any).headerService = null;
        let result = component.brandImage;
        expect(result).toBeUndefined();
      });

      it('should return brandImage', () => {
        (component as any).headerService = {
          brand : {
            logo: true
          }
        };
        let result = component.brandImage;
        expect(result).toEqual(true);
      });
    });
  });

  describe('method', () => {

    describe('ngOnInit',() => {
      it('should intialize the component',() => {
        activateRouteSpy.snapshot.paramMap.get.and.returnValue(false);
        fixture = TestBed.createComponent(HeaderComponent);
        headerService = TestBed.inject(HeaderService);
        // auditSyncService = TestBed.inject(AuditSyncService);
        component = fixture.componentInstance;
        headerService.outputEmitter.next(null);
        component.headerValues = {
          autoSave: 'true',
          filterValues: null,
          geolocation: null
        };
        fixture.detectChanges();
      });
    });

    describe('profileDetail()', () => {
      beforeEach(async() => {
        await component.profileDetail(1,{},true);
      })

      it('should call create modal popup method', () => {
        expect(mockModalController.create).toHaveBeenCalledWith({
          component: AppProfileInformationComponent,
          componentProps: {
            header: {},
            userId: 1,
            isShown: true,
            showLeftIcon: true
          }
        });
      });

      it('should call the present method', () => {
        expect(modalSpy.present).toHaveBeenCalled();
      });
    });

    describe('openSync()', () => {
      beforeEach(async() => {
        await component.openSync();
      });

      it('should call create modal popup method', () => {
        expect(mockModalController.create).toHaveBeenCalledWith({
          component: AppAuditSyncComponent,
          backdropDismiss: false,
          cssClass: 'offline-sync',
          componentProps: {
            header: 'Offline Data',
            showLeftIcon: true
          }
        });
      });

      it('should call the present method', () => {
        expect(modalSpy.present).toHaveBeenCalled();
      });
    });

    describe('geoLocation()', () => {
      describe('when geolocation is disabled', () => {
        it('should open the warning popup', async () => {
          (component as any).headerService.headerData.geolocation.disableGeolocation = true;
          await component.geoLocation();
          expect(mockAlertService.warning).toHaveBeenCalledWith({
            message: 'You cannot change the location after starting the audit.',
            buttons: [{
              text: 'OK',
              cssClass: 'primary'
            }]
          });
        })
      });

      describe('when geolocation is disabled', () => {
        describe('when we have location details', () => {
          const mockResponse = {
            data: {
              address: 'abc',
              latitude: 500,
              longitude: 500
            }
          };
          beforeEach(async() => {
            (component as any).headerService.headerData.geolocation.disableGeolocation = false;
            modalSpy.onDidDismiss.and.callFake(() => Promise.resolve(mockResponse));
            await component.geoLocation();
          });

          it('should call the create popup method', () => {
            expect(mockModalController.create).toHaveBeenCalledWith({
              component: AppGeolocationComponent,
              backdropDismiss: false,
              cssClass: 'geo-location',
              componentProps: {
                header: 'Set Geolocation',
                showLeftIcon: true
              }
            })
          })

          it('should call the modal popup present method', () => {
            expect(modalSpy.present).toHaveBeenCalled();
          });
        });

        describe('when location doesnt have any value', () => {
          const mockResponse = {
            data: null
          };

          beforeEach(async() => {
            (component as any).headerService.headerData.geolocation.disableGeolocation = false;
            modalSpy.onDidDismiss.and.callFake(() => Promise.resolve(mockResponse));
            await component.geoLocation();
          });

          it('should set the intial value', () => {
            expect((component as any).headerService.headerData.geolocation).toEqual({
              address: 'Enter location',
              latitude: 0,
              longitude: 0,
              disableGeolocation: false
            });
          });
        });
      });
    });
  });
});
