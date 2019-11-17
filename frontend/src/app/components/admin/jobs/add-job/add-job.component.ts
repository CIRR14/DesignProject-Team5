<<<<<<< Updated upstream:frontend/src/app/components/admin/jobs/add-job/add-job.component.ts
=======
import { Job } from './../job';
import { AngularFirestore } from '@angular/fire/firestore';
>>>>>>> Stashed changes:src/app/components/admin/jobs/add-job/add-job.component.ts
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
    console.log(this.job);
<<<<<<< Updated upstream:frontend/src/app/components/admin/jobs/add-job/add-job.component.ts
    this.job.created = new Date(this.job.created).valueOf();
    this.db.list('jobs').push(this.job)
    .then(_ => {
      this.job = {};
      console.log('success');
    });
=======

    const jobRef = this.as.doc(`jobs/${this.job.id}`);
>>>>>>> Stashed changes:src/app/components/admin/jobs/add-job/add-job.component.ts

    const jobInfo: Job = {
      created: this.job.created,
      clientName: this.job.clientName,
      address: this.job.address,
      id: this.job.id,
      description: this.job.description,
      jobHours: this.getJobHours(this.job.id)
    };

    jobRef.set(jobInfo, {merge: true});
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

  generateJobId(address){
    const regex = /\d+ [a-zA-Z]{3}/g;

    const match = address.match(regex);

    return match && match[0] ? match[0].replace(/\s+/g, '').toUpperCase() : '';
  }

}
