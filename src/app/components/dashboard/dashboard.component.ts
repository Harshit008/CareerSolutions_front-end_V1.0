import { Component, OnInit } from '@angular/core';
import { Jobs } from "./Jobs";
import { JobServiceService } from "src/app/services/jobService/job-service.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public jobs: Jobs[];
  constructor(private jobservice: JobServiceService) { }

  ngOnInit() {
      this.getJobs();
  }
  public getJobs(): void {
      this.jobservice.getJobs().subscribe(
        (response:Jobs[]) => {
          this.jobs=response;
        },
        error=>{
          console.log(error);
        }
      )
  }
}
