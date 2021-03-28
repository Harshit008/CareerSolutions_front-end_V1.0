import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { JobseekerloginComponent } from './components/jobseekerlogin/jobseekerlogin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { SuccessComponent } from './components/success/success.component';
import { EditJobComponent } from './components/dashboard/edit-job/edit-job.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostJobComponent } from './components/post-job/post-job.component';
import { JobSeekerDashboardComponent } from './components/job-seeker-dashboard/job-seeker-dashboard.component';
import { ViewApplicationsComponent } from './components/view-applications/view-applications.component';
import { JobSeekerSignupComponent } from './components/job-seeker-signup/job-seeker-signup.component';
import { ManageApplicationsComponent } from './components/manage-applications/manage-applications.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { JobseekersuccessComponent } from './components/jobseekersuccess/jobseekersuccess.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    JobseekerloginComponent,
    SignupComponent,
    SuccessComponent,
    EditJobComponent,
    PostJobComponent,
    JobSeekerDashboardComponent,
    ViewApplicationsComponent,
    JobSeekerSignupComponent,
    ManageApplicationsComponent,
    EditProfileComponent,
    JobseekersuccessComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
