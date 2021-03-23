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
  
  public getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(`${this.apiurl}/getJobs`);
  }
}
