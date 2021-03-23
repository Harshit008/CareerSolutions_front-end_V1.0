import { Component, OnInit } from '@angular/core';
import { SignupserviceService } from "src/app/services/signup/signupservice.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  recruiter_details={
    username: '',
    password: '',
    email: '',
    name: ''
  }
  constructor(private signupService:SignupserviceService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.recruiter_details.username!='' && this.recruiter_details.password!='' && this.recruiter_details.name!='' && this.recruiter_details.email!='')&& (this.recruiter_details.username!=null && this.recruiter_details.password!=null && this.recruiter_details.name!=null && this.recruiter_details.email!=null ))
    {
            this.signupService.registerrecruiter(this.recruiter_details).subscribe(
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
}
