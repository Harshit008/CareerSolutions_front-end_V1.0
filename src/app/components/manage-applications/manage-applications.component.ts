import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/Application';
import { JobServiceService } from "src/app/services/jobService/job-service.service";
@Component({
  selector: 'app-manage-applications',
  templateUrl: './manage-applications.component.html',
  styleUrls: ['./manage-applications.component.css']
})
export class ManageApplicationsComponent implements OnInit {
  public applications:Application[]
  public jobId:string
  public application:Application
  constructor(private jobService: JobServiceService) { }

  ngOnInit(){
      this.jobId=localStorage.getItem('jobId');
      this.jobService.manageApplications(this.jobId).subscribe(
        (response:any)=>{
          this.applications=response
          console.log(response)
        },
        error=>{
          console.log(error)
        }
      )
  }

  acceptApplication(applicationId:string){

      this.jobService.acceptApplication(applicationId,this.application).subscribe(
        response=>{
          console.log(response)
        },
        error=>{
          alert("Application accepted!")          
          console.log(error)
          window.location.href="/manageApplications"
        }
      )
  }

  rejectApplication(applicationId:string){

    this.jobService.rejectApplication(applicationId,this.application).subscribe(
      response=>{
        console.log(response)
      },
      error=>{
        alert("Application rejected!")
        console.log(error)
        window.location.href="/manageApplications"
      }
    )
}
  storeApplicationId(applicationId:string){
    localStorage.setItem('applicationId',applicationId);
    window.location.href="/viewProfile";
  }

}
