import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  LogoutUrl="https://cms-s1i9.onrender.com";

  constructor(private http:HttpClient) { }

  logoutOperation(){
    
  return this.http.get(this.LogoutUrl);
  }
}
