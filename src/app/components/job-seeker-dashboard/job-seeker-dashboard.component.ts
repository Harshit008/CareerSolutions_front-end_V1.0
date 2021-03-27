import { Component, OnInit } from '@angular/core';
import { Jobs } from "src/app/Jobs";
import { JobServiceService } from "src/app/services/jobService/job-service.service";
@Component({
  selector: 'app-job-seeker-dashboard',
  templateUrl: './job-seeker-dashboard.component.html',
  styleUrls: ['./job-seeker-dashboard.component.css']
})
export class JobSeekerDashboardComponent implements OnInit {
  public jobs: Jobs[];
  constructor(private jobservice: JobServiceService) { }

  ngOnInit(){
      this.jobservice.getJsJob().subscribe(
        (response:Jobs[]) => {
           this.jobs=response;
          
        },
        error=>{
          console.log(error);
        }
      );
     
  }

}
