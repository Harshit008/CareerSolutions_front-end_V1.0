import { Component, OnInit } from '@angular/core';
import { Jobs } from "src/app/Jobs";
import { JobServiceService } from "src/app/services/jobService/job-service.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public jobs: Jobs[];
  constructor(private jobservice: JobServiceService) { }
  public username: string;
  ngOnInit() {
      this.username=localStorage.getItem('username');
      this.getJobs(this.username);
  }
  public deleteJob(jobId:string){
    console.log(jobId);
     
    this.jobservice.deleteJob(jobId).subscribe(
      response=>{
        console.log(response);
        
      },
      error=>{
        console.log(error);
        window.location.href="dashboard";
      }
    );
   
  }
  public getJobs(username:string): void {
      this.jobservice.getJobs(username).subscribe(
        (response:Jobs[]) => {
          this.jobs=response;
        },
        error=>{
          console.log(error);
        }
      )
  }

  public editJob(jobId:string){
    console.log(jobId);
    localStorage.setItem('jobId',jobId);
   
  }

  public storeJobId(jobId:string){
    localStorage.setItem('jobId',jobId);
  }

}
