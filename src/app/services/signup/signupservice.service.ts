import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
  apiurl="http://localhost:9999/myapp"
  constructor(private http: HttpClient) { }

  registerrecruiter(recruiter_details){
    return this.http.post(`${this.apiurl}/registerrecruiter`,recruiter_details);
  }
}
