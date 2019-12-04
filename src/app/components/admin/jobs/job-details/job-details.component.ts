import { Job } from './../job';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription, Observable, of } from 'rxjs';
import { JobService } from '../job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  formSubscription: Subscription;
  theJob: Job;
  job$: Observable<Job>;
  id = 0;

  nonEdit = true;

  length: number;

  form: FormGroup;

  clientName = new FormControl('', Validators.required);
  // address = new FormControl('', Validators.required);
  jobHours = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  isActive = new FormControl('', Validators.required);


  constructor(
    private route: ActivatedRoute,
    private service: JobService,
    private afs: AngularFirestore,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      clientName: this.clientName,
      // address: this.address,
      jobHours: this.jobHours,
      description: this.description,
      isActive: this.isActive
    });
  }


  ngOnInit() {
    this.getJobInfo();

    this.job$ = this.service.getJobById(this.id);
    this.subscription = this.job$.subscribe(
      data => {
        console.log(data);
        this.theJob = data;
        this.form.controls.clientName.setValue(this.theJob.clientName);
        // this.form.controls.address.setValue(this.theJob.address);
        this.form.controls.jobHours.setValue(this.theJob.jobHours.toFixed(2));
        this.form.controls.description.setValue(this.theJob.description);
        this.form.controls.isActive.setValue(this.theJob.isActive);
      },
      err => {
        console.log(err);
        this.service.errorMessage('Error loading!', 'dismiss');
       } ,
      () => {console.log('what to do after'); }
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getJobInfo() {
    this.route.params
    .subscribe( params => {
      this.id = params.id;
    });
    return of(this.id);
  }

  onSubmit() {
    console.log('edited');
    console.log(this.form);

    const jobRef = this.afs.doc(`jobs/${this.theJob.id}`);

    const data: Job = {
      created: this.theJob.created,
      clientName: this.form.value.clientName,
      address: this.theJob.address,
      id: this.theJob.id,
      description: this.form.value.description,
      jobHours: this.form.value.jobHours,
      isActive: this.form.value.isActive
    };

    console.log(data);
    jobRef.set(data, { merge: true})
      .then(() => {
        this.service.successMessage('Successfully updated!', 'dismiss');
        this.router.navigateByUrl('admin-jobs');
      }).catch((err) => {
        console.log(err);
        this.service.errorMessage('Error updating!', 'dismiss');
      });
  }

}
