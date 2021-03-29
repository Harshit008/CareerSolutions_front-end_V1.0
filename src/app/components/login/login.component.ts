import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recruiter_credentials={
    username: '',
    password: '',
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
      
      if((this.recruiter_credentials.username!='' && this.recruiter_credentials.password!='')&& (this.recruiter_credentials.username!=null && this.recruiter_credentials.password!=null))
      {
          this.loginService.generateToken(this.recruiter_credentials).subscribe(
              (response:any) =>{
                        console.log(response.authenticationToken);
                        this.loginService.loginRecruiter(response.authenticationToken);
                        this.loginService.storeUsername(response.username);
                        window.location.href="/dashboard";
              },
              error=>{
                        alert("Invalid username or password");
                        console.log(error);
              }
          )
      }else{
        console.log("Fields are empty");
      }
  }
}


