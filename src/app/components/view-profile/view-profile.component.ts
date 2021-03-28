import { Component, OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/services/jobService/job-service.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
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
  public applicationId:string;
  constructor(private jobService: JobServiceService) { }

  ngOnInit(){
    this.applicationId=localStorage.getItem('applicationId');

  }

}
