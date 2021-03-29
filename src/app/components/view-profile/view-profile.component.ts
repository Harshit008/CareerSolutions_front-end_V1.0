import { Component, OnInit } from '@angular/core';
import { JobSeeker } from 'src/app/JobSeeker';
import { Resume } from 'src/app/Resume';
import { JobServiceService } from 'src/app/services/jobService/job-service.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  public jobSeeker: JobSeeker;
  public applicationId:string;
  public resume:Resume;
  public downloadLink:string;
  constructor(private jobService: JobServiceService) { }

  ngOnInit(){
    this.applicationId=localStorage.getItem('applicationId');
    this.jobService.getJobSeeker(this.applicationId).subscribe(
      (response:JobSeeker)=>{
        console.log(response)
        this.jobSeeker=response
      },
      error=>{
        console.log(error)
      }

    )
  }

  downloadResume(jobSeekerId){
      this.jobService.downloadResume(jobSeekerId).subscribe(
        (response:Resume)=>{
          console.log(response)
          this.resume=response
          this.downloadLink=this.getDownloadLink(this.resume.id)
          console.log(this.downloadLink)
          window.location.href=this.downloadLink
          this.jobService.getDownloadLink(this.resume.id).subscribe(
            response=>{
              window.location.href=this.downloadLink
              console.log(response)
            },
            error=>{
              console.log(error)
            }
          )
        },
        error=>{
          console.log(error)
        }
      );
  }

  getDownloadLink(id):string{
    return this.downloadLink = "http://localhost:9999/myapp/downloadResume/" + this.resume.id;
  }

}
