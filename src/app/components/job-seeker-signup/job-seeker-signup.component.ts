import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';  
import { JobServiceService } from "src/app/services/jobService/job-service.service";
@Component({
  selector: 'app-job-seeker-signup',
  templateUrl: './job-seeker-signup.component.html',
  styleUrls: ['./job-seeker-signup.component.css']
})
export class JobSeekerSignupComponent implements OnInit {
  jobSeeker_details={
    name: '',
    password: '',
    username: '',
    email: '',
    experience:'',
    previousCompany: '',
    careerLevel: '',
    previousctc:'',
    certifications: '',
    projects: '',
    levelOfEducation:'',
    fieldOfStudy:'',
    college:'',
    hscMarks: '',
    sscMarks: '',
    graduationMarks: ''
  }
   // Variable to store shortLink from api response
   shortLink: string = "";
   loading: boolean = false; // Flag variable
   files: File = null; // Variable to store file 
  constructor(private jobService:JobServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.jobSeeker_details.username!='' && this.jobSeeker_details.password!='' && this.jobSeeker_details.name!='' && this.jobSeeker_details.email!='')&& (this.jobSeeker_details.username!=null && this.jobSeeker_details.password!=null && this.jobSeeker_details.name!=null && this.jobSeeker_details.email!=null ))
    {
            this.jobService.registerJobSeeker(this.jobSeeker_details).subscribe(
              response=>{
                console.log(response);
                    
                window.location.href="/jobseekersuccess";
              },
              error=>{
                console.log(error);
      }
            )
    }else{
      console.log("Fields are empty");
    }

  }
  // Inject service 


  // On file Select
  onChange(event) {
      this.files = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload(jsusername:string) {
      this.loading = !this.loading;
      console.log(this.files);
      this.jobService.upload(jsusername,this.files).subscribe(
          (event: any) => {
              if (typeof (event) === 'object') {

                  // Short link via api response
                  this.shortLink = event.link;

                  this.loading = false; // Flag variable 
              }
          }
      );
  }

}
