import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {JobseekerloginComponent} from './components/jobseekerlogin/jobseekerlogin.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './components/signup/signup.component';
import { SuccessComponent } from './components/success/success.component';
import { EditJobComponent } from './components/dashboard/edit-job/edit-job.component';
import { PostJobComponent } from './components/post-job/post-job.component';
import { JobSeekerDashboardComponent } from './components/job-seeker-dashboard/job-seeker-dashboard.component';
import { JsAuthGuard } from "src/app/services/js-auth.guard";
import { ViewApplicationsComponent } from "./components/view-applications/view-applications.component";
import { JobSeekerSignupComponent } from './components/job-seeker-signup/job-seeker-signup.component';
import { ManageApplicationsComponent } from './components/manage-applications/manage-applications.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { JobseekersuccessComponent } from './components/jobseekersuccess/jobseekersuccess.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'jobseekerlogin',
    component: JobseekerloginComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component: SignupComponent,
    pathMatch:'full'
  },
  {
    path:'success',
    component:SuccessComponent,
    pathMatch:'full'
  },
  {
    path:'editJob',
    component: EditJobComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'postJob',
    component: PostJobComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'jobSeekerDashboard',
    component: JobSeekerDashboardComponent,
    pathMatch:'full',
    canActivate:[JsAuthGuard]
  },
  {
    path:'viewApplications',
    component: ViewApplicationsComponent,
    pathMatch:'full',
    canActivate:[JsAuthGuard]
  },
  {
    path:'jobSeekerSignup',
    component: JobSeekerSignupComponent,
    pathMatch:'full'
  },
  {
    path:'manageApplications',
    component: ManageApplicationsComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'editProfile',
    component: EditProfileComponent,
    pathMatch:'full',
    canActivate:[JsAuthGuard]
  },
  {
    path:'jobseekersuccess',
    component:JobseekersuccessComponent,
    pathMatch:'full'
  },
  {
    path:'viewProfile',
    component: ViewProfileComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
