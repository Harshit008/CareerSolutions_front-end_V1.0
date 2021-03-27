import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JobSeekerloginService {
  apiurl="http://localhost:9999/myapp"
  constructor(private http: HttpClient) { }
  generateToken(jobSeeker_credentials:any) {


   
    return this.http.post(`${this.apiurl}/jobseekerlogin`,jobSeeker_credentials);
  }
  
    loginJobSeeker(token){
      localStorage.setItem("jstoken",token);
      return true;
    }
  
    storeUsername(username){
      localStorage.setItem("jsusername",username);
    }
  
    isLoggedIn(){
  
        let token=localStorage.getItem("jstoken");
        if(token==undefined || token=='' || token==null){
          return false;
        }else{
          return true;
        }
      }
  
      logout(){
        localStorage.removeItem("jstoken")
        return true;
      }
  
      getToken(){
        return localStorage.getItem("jstoken");
      }
}
