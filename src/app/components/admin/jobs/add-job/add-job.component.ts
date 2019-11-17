import { AngularFirestore } from '@angular/fire/firestore';
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

  constructor(private as: AngularFirestore) { }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.job);

    // console.log(this.job);
    // this.job.created = new Date(this.job.created).valueOf();
    // this.db.list('jobs').push(this.job)
    // .then(_ => {
    //   this.job = {};
    //   console.log('success');
    // });

  }

  cancel() {
    // this.job = {};
  }

  onChange(e){
    // this.job.id = this.generateJobId(e);
  }

  generateJobId(address){
    const regex = /\d+ [a-zA-Z]{3}/g;

    const match = address.match(regex);

    return match && match[0] ? match[0].replace(/\s+/g, '').toUpperCase() : '';
  }

}
