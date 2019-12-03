import { Job } from './../job';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


// TODO: Replace this with your own data model type

// TODO: replace this with real data from your application


/**
 * Data source for the Viewjobs view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ViewInactiveDataSource extends DataSource<Job> {
  inactive: Job[] = [];

  constructor(private inactivePaginator: MatPaginator, private inactiveSort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Job[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.inactive),
      this.inactivePaginator.page,
      this.inactiveSort.sortChange
    ];

    // Set the paginator's length
    this.inactivePaginator.length = this.inactive.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.inactive]));
    }));
  }


  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(inactive: Job[]) {
    const startIndex = this.inactivePaginator.pageIndex * this.inactivePaginator.pageSize;
    return inactive.splice(startIndex, this.inactivePaginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(inactive: Job[]) {
    if (!this.inactiveSort.active || this.inactiveSort.direction === '') {
      return inactive;
    }

    return inactive.sort((a: any, b: any) => {
      const isAsc = this.inactiveSort.direction === 'asc';
      switch (this.inactiveSort.active) {
        case 'created': return compare(+a.created.seconds, +b.created.seconds, isAsc);
        case 'clientName': return compare(a.clientName, b.clientName, isAsc);
        case 'address': return compare(a.address, b.address, isAsc);
        case 'jobHours': return compare(a.jobHours, b.jobHours, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
