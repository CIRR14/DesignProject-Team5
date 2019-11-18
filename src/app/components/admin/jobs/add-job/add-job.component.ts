import { Job } from './../job';
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

    const jobRef = this.as.doc(`jobs/${this.job.id}`);
    const data: Job = {
      created: this.job.created,
      clientName: this.job.clientName,
      address: this.job.address,
      id: this.job.id,
      description: this.job.description,
      jobHours: this.getJobHours(this.job.id)
    };
    jobRef.set(data, {merge: true});
  }

  getJobHours(id) {
    return 5;
  }

  cancel() {
    this.job = {};
  }

  onChange(e){
    this.job.id = this.generateJobId(e);
  }

  generateJobId(address) {
    const regex = /\d+ [a-zA-Z]{3}/g;

    const match = address.match(regex);

    return match && match[0] ? match[0].replace(/\s+/g, '').toUpperCase() : '';
  }

}
