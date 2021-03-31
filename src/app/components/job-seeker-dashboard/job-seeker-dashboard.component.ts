import { Component, OnInit } from '@angular/core';
import { Jobs } from "src/app/Jobs";
import { JobServiceService } from "src/app/services/jobService/job-service.service";
@Component({
  selector: 'app-job-seeker-dashboard',
  templateUrl: './job-seeker-dashboard.component.html',
  styleUrls: ['./job-seeker-dashboard.component.css']
})
export class JobSeekerDashboardComponent implements OnInit {
  public jobs:any[];
  constructor(private jobservice: JobServiceService) { }
  public recruiterName:string
  public jsusername:string
  public applied:boolean
  public res:string
  application={
    status:''
  }
  ngOnInit(){
      this.jobservice.getJsJob().subscribe(
        (response:any[]) => {
           console.log(response)
           this.jobs=response;
          
        },
        error=>{
          console.log(error);
        }
      );     
  }

  apply(jobId:string){
    this.jsusername=localStorage.getItem('jsusername');
    this.res=this.hasApplied(jobId);
    if(this.res==null){
      this.jobservice.apply(jobId,this.jsusername,this.application).subscribe(
        (response:any[]) => {
          
          console.log(response)
          //this.jobs=response;
         
       },
       error=>{
        alert("You've Successfully applied for the job. Please wait for the response from the recruiter!")
         console.log(error);
       }
      );
    }
    else{
      alert("You have already applied for this job!")
    }
   

  }
  hasApplied(jobId:string):string{
    
    this.jsusername=localStorage.getItem('jsusername');
    this.jobservice.hasApplied(jobId,this.jsusername).subscribe(
      (response)=>{
        console.log(response)
        this.res="Found"
      },
      error=>{
        this.res=null;
      }
    )
    return this.res
  }

}
