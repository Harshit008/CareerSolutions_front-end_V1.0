import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/jobService/job-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  professional_details={
    experience:'',
    previousCompany: '',
    careerLevel: '',
    previousctc:'',
    certifications: '',
    projects: ''
  }

  educational_details={
    levelOfEducation:'',
    fiedldOfStudy:'',
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
    if((this.professional_details.experience!='' && this.professional_details.previousCompany!='' && this.professional_details.careerLevel!='' && this.professional_details.previousctc!='')&& (this.professional_details.experience!=null && this.professional_details.previousCompany!=null && this.professional_details.careerLevel!=null && this.professional_details.previousctc!=null ))
    {
            console.log(this.professional_details)
            this.username=localStorage.getItem('jsusername');
            this.jobService.insertProfessionalDetails(this.professional_details,this.username).subscribe(
              response=>{
                console.log(response);
                    
                window.location.href="/success";
              },
              error=>{
                console.log(error);
      }
            )
    }else{
      console.log("Fields are empty");
    }
    
    if((this.educational_details.college!='' && this.educational_details.fiedldOfStudy!='' && this.educational_details.graduationMarks!='' && this.educational_details.sscMarks!='')&& (this.educational_details.college!=null && this.educational_details.fiedldOfStudy!=null && this.educational_details.graduationMarks!=null && this.educational_details.sscMarks!=null ))
    {
            console.log(this.educational_details)
            this.jobService.insertEducationalDetails(this.educational_details,this.username).subscribe(
              response=>{
                console.log(response);
                    
                window.location.href="/success";
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
