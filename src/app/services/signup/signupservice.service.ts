import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {
  apiurl=environment.apiBaseUrl
  constructor(private http: HttpClient) { }

  registerrecruiter(recruiter_details){
    return this.http.post(`${this.apiurl}/registerrecruiter`,recruiter_details);
  }
}
