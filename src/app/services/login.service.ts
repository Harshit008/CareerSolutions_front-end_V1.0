import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiurl="http://localhost:9999/myapp"

  constructor(private http: HttpClient) {   } 

generateToken(recruiter_credentials:any) {


  //const headers = new HttpHeaders({Authorization:'Basic'+btoa(recruiter_credentials)});
  return this.http.post(`${this.apiurl}/recruiterlogin`,recruiter_credentials);
}

  loginRecruiter(token){
    localStorage.setItem("token",token);
    return true;
  }

  storeUsername(username){
    localStorage.setItem("username",username);
  }

  isLoggedIn(){

      let token=localStorage.getItem("token");
      if(token==undefined || token=='' || token==null){
        return false;
      }else{
        return true;
      }
    }

    logout(){
      localStorage.removeItem("token")
      return true;
    }

    getToken(){
      return localStorage.getItem("token");
    }
}
