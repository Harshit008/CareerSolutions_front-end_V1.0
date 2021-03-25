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
const routes: Routes = [
  {
    path:'',
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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
