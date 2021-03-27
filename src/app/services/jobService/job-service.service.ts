import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobs } from "src/app/Jobs";
@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  apiurl="http://localhost:9999/myapp";
  constructor(private http:HttpClient) { }
  
  public getJobs(username:string): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(`${this.apiurl}/getJobs/${username}`);
  }

  public deleteJob(jobId:string):Observable<any> {
      console.log(jobId);
      return this.http.delete(`${this.apiurl}/deleteJob/${jobId}`);
  }

  public getJob(jobId:string): Observable<Jobs>{
    return this.http.get<Jobs>(`${this.apiurl}/getJob/${jobId}`);

  }

  public updateJob(jobId:string, username:string,job:Jobs): Observable<Jobs>{
    return this.http.put<Jobs>(`${this.apiurl}/updateJob/${jobId}/${username}`,job);
  }

  public postJob(username:string,jobs_details): Observable<Jobs>{
    return this.http.post<Jobs>(`${this.apiurl}/insertJob/${username}`,jobs_details);
  }

  public getJsJob(): Observable<Jobs[]>{
    return this.http.get<Jobs[]>(`${this.apiurl}/jobSeeker/getJobs`);
  }

  public apply(jobId:string,jsusername:string,application): Observable<any>{
    return this.http.post<any>(`${this.apiurl}/insertApplications/${jobId}/${jsusername}`,application);
  }

  public displayApplication(jsusername:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiurl}/getApplication/${jsusername}`);
  }

}
