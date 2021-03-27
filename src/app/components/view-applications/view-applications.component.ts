import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/Application';
import { Jobs } from 'src/app/Jobs';
import { JobSeeker } from 'src/app/JobSeeker';
import { Recruiter } from 'src/app/Recruiter';
import { JobServiceService } from "src/app/services/jobService/job-service.service";
@Component({
  selector: 'app-view-applications',
  templateUrl: './view-applications.component.html',
  styleUrls: ['./view-applications.component.css']
})
export class ViewApplicationsComponent implements OnInit {

  constructor(private jobservice: JobServiceService) { }
  public applications:Application[];
  public jsusername:string;
  ngOnInit() {
    this.jsusername=localStorage.getItem('jsusername');
    this.jobservice.displayApplication(this.jsusername).subscribe(
      (response:Application[])=>{
        this.applications=response
        console.log(response)
      },
      error=>{
        console.log(error)
      }
    );
  }

}
