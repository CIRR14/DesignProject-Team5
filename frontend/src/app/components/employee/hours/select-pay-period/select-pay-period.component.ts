import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AngularFirestore } from '@angular/fire/firestore';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1234, name: '1/1/2019', weight: '3:00', symbol: '4:00'},
  {position: 2345, name: '2/2/2019', weight: '3:00', symbol: '4:00'},

];

@Component({
  selector: 'app-select-pay-period',
  templateUrl: './select-pay-period.component.html',
  styleUrls: ['./select-pay-period.component.scss']
})
export class SelectPayPeriodComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() {

  // setInterval(() => {
  //   let dt = new Date();
  //   if(document.getElementById('currentDate')){
  //     document.getElementById('currentDate').innerHTML = dt.toLocaleDateString();
  //   } else {
  //     console.log('undefined date');
  //   }
  // });


  // setInterval(() => {
  //   let dt = new Date();
  //   if(document.getElementById('currentTime')){
  //     document.getElementById('currentTime').innerHTML = dt.toLocaleDateString();
  //   } else {
  //     console.log('undefined time');
  //   }
  // });


  }

  ngOnInit() {
  }

// SelectPayPeriodComponent.controller('edit', function edit($scope, usersApi, clockApi, payperiodFactory, totaltimeFactory) {
//   $scope.currentTimes = {};
//   $scope.currentUser = 0;
//   $scope.selectedDate = moment();
//   $scope.startDate = '';
//   $scope.endDate = '';
//   $scope.startTime = '';
//   $scope.endTime = '';


//   // get the list of users
//   usersApi.getActive().then((response) =>  {
//       $scope.users = response.data;

//   });
//   function getTimes(date) {
//     let object;

//     object.payperiodTotal = 0;
//     const periodDates = payperiodFactory.periodDates(date);
//     $scope.startDate = periodDates.firstWeekStart;
//     $scope.endDate = periodDates.secondWeekEnd;
//     clockApi.get($scope.currentUser, periodDates.firstWeekStart, periodDates.firstWeekEnd).then((response) =>  {
//         object.firstWeekTotal = totaltimeFactory.getTotal(response.data);
//         object.firstWeek = response.data;
//         object.payperiodTotal += object.firstWeekTotal;
//     });
//     clockApi.get($scope.currentUser, periodDates.secondWeekStart, periodDates.secondWeekEnd).then((response) =>  {
//         object.secondWeekTotal = totaltimeFactory.getTotal(response.data);
//         object.secondWeek = response.data;
//         object.payperiodTotal += object.secondWeekTotal;
//     });
//     return object;

//     function newFunction() {
//       return object;
//     }
// }
//     // resets back to basics
//   function reset() {
//       $scope.currentTimes = {};
//       $scope.currentUser = 0;
//       $scope.selectedDate = moment();
//       $scope.startDate = '';
//       $scope.endDate = '';
//       $scope.startTime = '';
//       $scope.endTime = '';
//   }

//   $scope.getTimes = () => {
//       if ($scope.currentUser > 0) {
//           $scope.currentTimes = getTimes($scope.selectedDate);
//       } else {
//           reset();
//       }
//   };

//   $scope.addRow = () => {
//       const start = moment($scope.selectedDate + ' ' + $scope.startTime, 'YYYY-MM-DD h:mm a').format('YYYY-MM-DD HH:mm:ss');
//       const end = moment($scope.selectedDate + ' ' + $scope.endTime, 'YYYY-MM-DD h:mm a').format('YYYY-MM-DD HH:mm:ss');
//       clockApi.add($scope.currentUser, start, end).then(() => {
//           $scope.currentTimes = getTimes($scope.selectedDate);
//           $scope.startTime = '';
//           $scope.endTime = '';
//       });
//   };

//   $scope.removeRow = (id) => {
//       clockApi.remove(id).then(() => {
//           $scope.currentTimes = getTimes($scope.selectedDate);
//       });
//   };

//   $scope.reset = () => {
//       reset();
//   };
// });


//   }


}
