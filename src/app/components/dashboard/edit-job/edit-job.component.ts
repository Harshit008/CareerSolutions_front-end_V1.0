import { Component, OnInit } from '@angular/core';
import { Jobs } from "src/app/Jobs";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobServiceService } from "src/app/services/jobService/job-service.service";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  form: FormGroup;
  public jobs: Jobs;
  public jobId: string;
  constructor( private formBuilder: FormBuilder,
    private jobservice: JobServiceService) { }
  
  ngOnInit(){
    this.jobId=localStorage.getItem('jobId');
    console.log(this.jobId);
    this.form = this.formBuilder.group({
      jobTitle: ['', Validators.required],
      jobDesc: ['', Validators.required],
      jobField: ['', Validators.required],
      employementType: ['', Validators.required],
      ctc: ['', Validators.required],
      experienceInYears: ['', Validators.required],
      education: ['', Validators.required]
      // lastName: ['', Validators.required],
      // about: []
    });
    
    
    this.getJob(this.jobId);
  }

  submit() {
    
    if (this.form.valid) {
      console.log(this.form.value);
      this.jobs=this.form.value;
      console.log(this.jobs)
      this.jobservice.updateJob(this.jobId,localStorage.getItem('username'),this.jobs).subscribe(
        response=>{
          console.log(response);
          alert("New Changes have been saved!");
          window.location.href="/dashboard";
        },
        error=>{
          console.log(error);
        }
      );
    }
  }
  public getJob(jobId:string){
    this.jobservice.getJob(jobId).subscribe(
      (response:Jobs) => {
        this.jobs=response;
       this.form.setValue({
          jobTitle: this.jobs.jobTitle,
          jobDesc: this.jobs.jobDesc,
          jobField: this.jobs.jobField,
          employementType: this.jobs.employementType,
          ctc: this.jobs.ctc,
          experienceInYears: this.jobs.experienceInYears,
          education: this.jobs.education
        });
      },
      error=>{
        console.log(error);
      }
    )
}
}
