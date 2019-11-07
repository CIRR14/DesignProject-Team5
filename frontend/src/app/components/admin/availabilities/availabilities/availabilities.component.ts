import { User } from './../../../auth/user';
import { Subscription } from 'rxjs';
import { AuthService } from './../../../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmployeeAvailabilityDataSource, EmployeeAvailabilityItem } from './../view-availability/employee-availability-datasource';
import { MatPaginator, MatSort } from '@angular/material';
import { AvailabilitiesService } from './../availabilities.service';
import { Component, OnInit, ViewChild, OnDestroy, Inject, ViewEncapsulation, QueryList, ViewChildren } from '@angular/core';
import { Observable, of as observableOf, merge } from 'rxjs';

import { EventSettingsModel,
  DayService, WeekService, WorkWeekService,
  MonthService, AgendaService, ResizeService,
  DragAndDropService, View, ScheduleComponent, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';



// import {  eventCollection, NotAvailable } from './data';
import { extend } from '@syncfusion/ej2-base';
import { Query, Predicate, DataManager, ReturnOption, WebApiAdaptor } from '@syncfusion/ej2-data';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';




@Component({
  selector: 'app-availabilities',
  templateUrl: './availabilities.component.html',
  styleUrls: ['./availabilities.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService]
})
export class AvailabilitiesComponent implements OnInit, OnDestroy {
  employee: User;
  users;
  employeeSubscription: Subscription;
  eventSubscription: Subscription;

  eventsLoaded: Promise<boolean>;
  usersLoaded: Promise<boolean>;

  employees$: Observable<User>;

  notAvailableEvents$: Observable<EmployeeAvailabilityItem>;
  notAvailableEvents;

  public  eventCollection: object[] = [];
  public  eventDataSource: object[] = this.getEvents();


public ownerCollections: object[] = [];
public ownerDataSource: object[] = this.getEmployees();


public allowMultiple = true;
public selectedDate: Date = new Date();

private dataManger: DataManager = new DataManager({
  json: this. eventDataSource,
  crossDomain: true
});

// TODO: get notAvailable dates from firebase and set them on here
public eventSettings: EventSettingsModel = { dataSource: this.dataManger };



@ViewChild('scheduleObj') scheduleObj: ScheduleComponent;
// @ViewChildren('ownerOneObj') ownerOneObj: CheckBoxComponent;
// @ViewChild('ownerTwoObj') ownerTwoObj: CheckBoxComponent;
// @ViewChild('ownerThreeObj') ownerThreeObj: CheckBoxComponent;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // dataSource: EmployeeAvailabilityDataSource;
  loggedInUser;
  today = new Date();

  public currentView: View = 'Month';




  constructor(private aService: AvailabilitiesService , private afs: AngularFirestore, private as: AuthService) {
  }

  ngOnInit() {
  }


  getEmployees(): object[] {
      // GETS EMPLOYEES FROM 'USERS' IN FIREBASE //
      this.employees$ = this.aService.getUsers();
      this.employeeSubscription =  this.employees$.subscribe(
           data => {
             this.users = data;
             this.users.forEach((element, i) => {
               console.log('element', element);
               console.log('index', i);
               const generatedColor = this.generateColor(i);
               this.users = {
                 OwnerText: element.displayName,
                 OwnerId: element.uid,
                 Color: generatedColor
               };
               this.ownerCollections.push(this.users);
              });
             this.usersLoaded = Promise.resolve(true);
            }
            );
      return this.ownerCollections;
  }

  generateColor(index): string {
    // RETURN COLOR FROM ARRAY OF THE INDEX
    const colors = [
     '#7986CB',
     '#4DD0E1',
     '#64B5F6',
     '#4DB6AC',
     '#FFD54F',
     '#DCE775',
     '#90A4AE',
     '#FFB74D',
     '#81C784'
    ];
    return colors[index];
  }

  getEvents(): object[] {
  /// GETS EVENTS FROM 'AVAILABILITY' IN FIREBASE //
  this.notAvailableEvents$ = this.aService.getEvents();
  this.eventSubscription = this.notAvailableEvents$.subscribe(
        (events) => {
            this.notAvailableEvents = events;
            this.notAvailableEvents.forEach((event, index) => {
              event.notAvailable.forEach(timestamp => {
                this.notAvailableEvents = {
                  Id: index,
                  OwnerId: event.userId,
                  Subject: event.title,
                  StartTime: new Date(timestamp.seconds  * 1000),
                  EndTime: new Date((timestamp.seconds + 1) * 1000),
                  IsAllDay: true
                };
                  this.eventCollection.push(this.notAvailableEvents);
              });

            });
            // console.log('after', this.ownerCollections);
            this.eventsLoaded = Promise.resolve(true);
        }
        );
  return this. eventCollection;
  }


  onChange(): void {
    // let predicate: Predicate;
    // const checkBoxes: CheckBoxComponent[] = [this.ownerOneObj, this.ownerTwoObj, this.ownerThreeObj];
    // checkBoxes.forEach((checkBoxObj: CheckBoxComponent) => {
    //     if (checkBoxObj.checked) {
    //         if (predicate) {
    //             predicate = predicate.or('OwnerId', 'equal', parseInt(checkBoxObj.value, 10));
    //         } else {
    //             predicate = new Predicate('OwnerId', 'equal', parseInt(checkBoxObj.value, 10));
    //         }
    //     }
    // });
    // this.scheduleObj.eventSettings.query = new Query().where(predicate);
}

onPopupOpen(args: PopupOpenEventArgs): void {
  if (args.type === 'Editor' || args.type === 'QuickInfo')  {
      args.cancel = true;
  }
}

  test2() {
   console.log(this.ownerCollections);
   this.ownerCollections.shift();
   console.log(this.ownerCollections);
  }

  ngOnDestroy() {
   this.employeeSubscription.unsubscribe();
   this.eventSubscription.unsubscribe();
  }

  // setAvailable(args): void {
  //   this.selectedDate = args.value;
  //   this.availableDates = args.values;

  //   this.availableDates.forEach(selectedDate => {

  //     console.log(selectedDate);

  //   });
  // }

}
