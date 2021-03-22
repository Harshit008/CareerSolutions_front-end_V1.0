import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recruiter_credentials={
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
      
      if((this.recruiter_credentials.username!='' && this.recruiter_credentials.password!='')&& (this.recruiter_credentials.username!=null && this.recruiter_credentials.password!=null))
      {
        console.log("we have to submit the form");
      }else{
        console.log("Fields are empty");
      }
  }
}
