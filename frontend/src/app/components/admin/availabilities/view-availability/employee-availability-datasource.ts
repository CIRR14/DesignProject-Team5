// import { MatPaginator, MatSort } from '@angular/material';
// import { DataSource } from '@angular/cdk/collections';
// import { map } from 'rxjs/operators';
// import { Observable, of as observableOf, merge } from 'rxjs';

export interface EmployeeAvailabilityItem {
  empId: string;
  title: string;
  date: Date[];
}

// export class EmployeeAvailabilityDataSource extends DataSource<EmployeeAvailabilityItem> {
//   empAvailability: EmployeeAvailabilityItem[] = [{
//     empId: '',
//     title: '',
//     date: []
//   }];

//   constructor(private paginator: MatPaginator, private sort: MatSort) {
//     super();
//   }

//   connect(): Observable<EmployeeAvailabilityItem[]> {
//     const dataMutations = [
//       observableOf(this.empAvailability),
//       this.paginator.page,
//       this.sort.sortChange
//     ];

//     this.paginator.length = this.empAvailability.length;

//     return merge(...dataMutations).pipe(map(() => {
//       return this.getPagedData(this.getSortedData([...this.empAvailability]));
//     }));
//   }


//   disconnect() {
//   }

//   private getPagedData(data: EmployeeAvailabilityItem[]) {
//     const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
//     return data.splice(startIndex, this.paginator.pageSize);
//   }

//   private getSortedData(data: EmployeeAvailabilityItem[]) {
//     if (!this.sort.active || this.sort.direction === '') {
//       return data;
//     }
// }
// }
