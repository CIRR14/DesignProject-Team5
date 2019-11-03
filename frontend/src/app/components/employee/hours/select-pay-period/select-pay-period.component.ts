import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-select-pay-period',
  templateUrl: './select-pay-period.component.html',
  styleUrls: ['./select-pay-period.component.scss']
})
export class SelectPayPeriodComponent implements OnInit {
  static controller(arg0: string, arg1: ($scope: any, usersApi: any, clockApi: any, payperiodFactory: any, totaltimeFactory: any) => void) {
    throw new Error("Method not implemented.");
  }

  datemessage: string;
  timemessage: string;

  constructor() { 
    setInterval(() =>
    {
    let currentDate = new Date();
    this.datemessage = currentDate.toDateString()
    } );

    setInterval(() =>
    {
    let currentTime = new Date();
    this.timemessage = currentTime.toLocaleTimeString();
    } ,1000);
    
  }

  ngOnInit() {
    
SelectPayPeriodComponent.controller('edit', function edit($scope, usersApi, clockApi, payperiodFactory, totaltimeFactory) {
  $scope.currentTimes = {};
  $scope.currentUser = 0;
  $scope.selectedDate = moment();
  $scope.startDate = "";
  $scope.endDate = "";
  $scope.startTime = "";
  $scope.endTime ="";


  //get the list of users
  usersApi.getActive().then(function(response) {
      $scope.users = response.data;
      
  });
  function getTimes(date) {
    var object;
    object.payperiodTotal = 0;
    var periodDates = payperiodFactory.periodDates(date);
    $scope.startDate = periodDates.firstWeekStart;
    $scope.endDate = periodDates.secondWeekEnd;
    clockApi.get($scope.currentUser, periodDates.firstWeekStart, periodDates.firstWeekEnd).then(function(response) {
        object.firstWeekTotal = totaltimeFactory.getTotal(response.data);
        object.firstWeek = response.data;
        object.payperiodTotal += object.firstWeekTotal;
    });
    clockApi.get($scope.currentUser, periodDates.secondWeekStart, periodDates.secondWeekEnd).then(function(response) {
        object.secondWeekTotal = totaltimeFactory.getTotal(response.data);
        object.secondWeek = response.data;
        object.payperiodTotal += object.secondWeekTotal;
    });
    return object;

    function newFunction() {
      return object;
    }
}
    //resets back to basics
    function reset() {
      $scope.currentTimes = {};
      $scope.currentUser = 0;
      $scope.selectedDate = moment();
      $scope.startDate = "";
      $scope.endDate = "";
      $scope.startTime = "";
      $scope.endTime = "";
  }

  $scope.getTimes = function() {
      if($scope.currentUser > 0) {
          $scope.currentTimes = getTimes($scope.selectedDate);
      } else {
          reset();
      }
  };

  $scope.addRow = function() {
      var start = moment($scope.selectedDate + " " + $scope.startTime, "YYYY-MM-DD h:mm a").format("YYYY-MM-DD HH:mm:ss");
      var end = moment($scope.selectedDate + " " + $scope.endTime, "YYYY-MM-DD h:mm a").format("YYYY-MM-DD HH:mm:ss");
      clockApi.add($scope.currentUser, start, end).then(function() {
          $scope.currentTimes = getTimes($scope.selectedDate);
          $scope.startTime = "";
          $scope.endTime = "";
      });
  };

  $scope.removeRow = function(id) {
      clockApi.remove(id).then(function() {
          $scope.currentTimes = getTimes($scope.selectedDate);
      });
  };

  $scope.reset = function() {
      reset();
  };
});


  }


}
