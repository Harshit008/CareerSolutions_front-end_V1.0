import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { JobSeekerloginService } from "src/app/services/jobSeekerlogin/job-seekerlogin.service";
@Injectable({
  providedIn: 'root'
})
export class JsAuthGuard implements CanActivate {
  constructor(private loginService: JobSeekerloginService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.isLoggedIn()){
        return true;
      }
      this.router.navigate(['home'])

    return false;
  }
  
}
