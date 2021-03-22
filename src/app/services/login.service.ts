import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl: "http://localhost:9999/myapp/"
  constructor() {   }

  loginRecruiter(token){
    localStorage.setItem("token",token);
    return true;
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
