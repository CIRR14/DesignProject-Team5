import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  job: any = [];
  formIsFilledOut = false;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  onSubmit() {
    this.job.created = new Date(this.job.created).valueOf();
    this.db.list('jobs').push(this.job)
    .then(_ => {
      this.job = {};
      console.log('success');
    });
  }

}
