import { User } from './../../../auth/user';
import { Subscription } from 'rxjs';
import { AuthService } from './../../../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmployeeAvailabilityItem } from './../view-availability/employee-availability-datasource';
import { AvailabilitiesService } from './../availabilities.service';
import { Component, OnInit, ViewChild, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable} from 'rxjs';

import { EventSettingsModel,
  DayService, WeekService, WorkWeekService,
  MonthService, AgendaService, ResizeService,
  DragAndDropService, View, ScheduleComponent, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';

import { DataManager} from '@syncfusion/ej2-data';




@Component({
  selector: 'app-availabilities',
  templateUrl: './availabilities.component.html',
  styleUrls: ['./availabilities.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService]
})
export class AvailabilitiesComponent implements OnInit, OnDestroy {
  users;
  employeeSubscription: Subscription;
  eventSubscription: Subscription;

  eventsLoaded: Promise<boolean>;
  usersLoaded: Promise<boolean>;

  employees$: Observable<User>;

  availableEvents$: Observable<EmployeeAvailabilityItem>;
  availableEvents;

  desktop: boolean;
  today = new Date();

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

public eventSettings: EventSettingsModel = { dataSource: this.dataManger };

public showHeaderBar = true;
public currentView: View = 'Month';


@ViewChild('scheduleObj') scheduleObj: ScheduleComponent;

  constructor(private aService: AvailabilitiesService , private afs: AngularFirestore, private as: AuthService) {
  }

  ngOnInit() {
const width = window.innerWidth;

if (width > 730) {
  this.desktop = true;
} else {
  this.desktop = false;
}
  }


  getEmployees(): object[] {
      // GETS EMPLOYEES FROM 'USERS' IN FIREBASE //
      this.employees$ = this.aService.getUsers();
      this.employeeSubscription =  this.employees$.subscribe(
           data => {
             this.users = data;
             this.users.forEach((element, i) => {
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
     '#81C784',
     '#5d4037',
     '#ffc107'
    ];
    return colors[index];
  }

  getEvents(): object[] {
  /// GETS EVENTS FROM 'AVAILABILITY' IN FIREBASE //
  if (this.eventCollection.length === 0) {
    this.availableEvents$ = this.aService.getEvents();
    this.eventSubscription = this.availableEvents$.subscribe(
          (events) => {
              this.availableEvents = events;
              this.availableEvents.forEach((event, index) => {
                event.available.forEach(timestamp => {
                  this.availableEvents = {
                    Id: index,
                    OwnerId: event.userId,
                    Subject: event.title,
                    StartTime: new Date(timestamp.seconds  * 1000),
                    EndTime: new Date((timestamp.seconds + 1) * 1000),
                    IsAllDay: true,
                    IsReadonly: true
                  };
                  this.eventCollection.push(this.availableEvents);
                });

              });
              this.eventsLoaded = Promise.resolve(true);
          }
          );
    return this. eventCollection;
  } else {
    console.log('events already loaded');
  }
  }

  onPopupOpen() {
    console.log('hello')
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

// onPopupOpen(args: PopupOpenEventArgs): void {
//   if (args.type === 'Editor' || args.type === 'QuickInfo')  {
//       args.cancel = true;
//   }
// }

  test2() {
   console.log(this.ownerCollections);
   this.ownerCollections.shift();
   console.log(this.ownerCollections);
  }

  ngOnDestroy() {
   this.employeeSubscription.unsubscribe();
   this.eventSubscription.unsubscribe();
  }
}
