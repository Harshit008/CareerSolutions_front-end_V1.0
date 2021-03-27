import { Component, OnInit } from '@angular/core';
import { JobSeekerloginService } from "src/app/services/jobSeekerlogin/job-seekerlogin.service";
@Component({
  selector: 'app-jobseekerlogin',
  templateUrl: './jobseekerlogin.component.html',
  styleUrls: ['./jobseekerlogin.component.css']
})
export class JobseekerloginComponent implements OnInit {

  jobSeeker_credentials={
    username: '',
    password: '',
  }
  constructor(private jobSeekerLoginService: JobSeekerloginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.jobSeeker_credentials.username!='' && this.jobSeeker_credentials.password!='')&& (this.jobSeeker_credentials.username!=null && this.jobSeeker_credentials.password!=null))
    {
        this.jobSeekerLoginService.generateToken(this.jobSeeker_credentials).subscribe(
            (response:any) =>{
                      console.log(response.authenticationToken);
                      this.jobSeekerLoginService.loginJobSeeker(response.authenticationToken);
                      this.jobSeekerLoginService.storeUsername(response.username);
                      window.location.href="jobSeekerDashboard";
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


