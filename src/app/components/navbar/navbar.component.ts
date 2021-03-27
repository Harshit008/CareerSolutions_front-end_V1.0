import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { JobSeekerloginService } from "src/app/services/jobSeekerlogin/job-seekerlogin.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean = false;
  public jsloggedIn: boolean = false;
  constructor(private loginService: LoginService,private jsloginservice: JobSeekerloginService,router: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn()
    this.jsloggedIn=this.jsloginservice.isLoggedIn()
  }
  logoutUser(){
    this.loginService.logout();
    this.jsloginservice.logout();
    location.reload();
  }
}
