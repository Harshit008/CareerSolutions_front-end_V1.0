import { Component, OnInit } from '@angular/core';
import { Jobs } from "src/app/Jobs";
import { JobServiceService } from 'src/app/services/jobService/job-service.service';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  public jobs: Jobs;
  constructor(private jobservice:JobServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if((this.jobs.jobTitle!='' && this.jobs.jobField!='' && this.jobs.jobDesc!='' && this.jobs.employementType!='' && this.jobs.experienceInYears!=0 && this.jobs.education!=''&& this.jobs.ctc!=0 )&& (this.jobs.jobTitle!=null  && this.jobs.jobField!=null && this.jobs.jobDesc!=null && this.jobs.employementType!=null && this.jobs.experienceInYears!=0 && this.jobs.education!=null && this.jobs.ctc!=0 ))
    {
            console.log(this.jobs)
            this.jobservice.postJob(localStorage.getItem('username'),this.jobs).subscribe(
              response=>{
                console.log(response);
                    
                //window.location.href="/dashboard";
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
