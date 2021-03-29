import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/jobService/job-service.service';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  jobs_details={
    jobTitle: '',
    jobDesc: '',
    jobField: '',
    employementType: '',
    ctc: '',
    experienceInYears: '',
    education: ''
}
  constructor(private jobservice:JobServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if((this.jobs_details.jobTitle!='' && this.jobs_details.jobField!='' && this.jobs_details.jobDesc!='' && this.jobs_details.employementType!='' && this.jobs_details.experienceInYears!='' && this.jobs_details.education!=''&& this.jobs_details.ctc!='' )&& (this.jobs_details.jobTitle!=null  && this.jobs_details.jobField!=null && this.jobs_details.jobDesc!=null && this.jobs_details.employementType!=null && this.jobs_details.experienceInYears!=null && this.jobs_details.education!=null && this.jobs_details.ctc!=null ))
    {
            console.log(this.jobs_details)
            this.jobservice.postJob(localStorage.getItem('username'),this.jobs_details).subscribe(
              response=>{
                console.log(response);
                    
                window.location.href="/dashboard";
                alert("New Job has been posted successfully!")
              },
              error=>{
                console.log(error);
      }
            )
    }else{
      console.log("Fields are empty");
    }

  }
}
