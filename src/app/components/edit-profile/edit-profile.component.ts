import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/jobService/job-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
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
   public username: string
  constructor(private jobService: JobServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.jobSeeker_details.experience!='' && this.jobSeeker_details.previousCompany!='' && this.jobSeeker_details.careerLevel!='' && this.jobSeeker_details.previousctc!='')&& (this.jobSeeker_details.experience!=null && this.jobSeeker_details.previousCompany!=null && this.jobSeeker_details.careerLevel!=null && this.jobSeeker_details.previousctc!=null ))
    {
            console.log(this.jobSeeker_details)
            this.username=localStorage.getItem('jsusername');
            this.jobService.editProfile(this.jobSeeker_details,this.username).subscribe(
              response=>{
                console.log(response);
                    
                window.location.href="/jobSeekerDashboard";
              },
              error=>{
                console.log(error);
      }
            )
    }else{
      console.log("Fields are empty");
    }
    
  }

  onChange(event){

  }

}
