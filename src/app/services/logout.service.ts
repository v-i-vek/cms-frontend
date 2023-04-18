import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  LogoutUrl="http://localhost:3001/logout";

  constructor(private http:HttpClient) { }

  logoutOperation(){
    
  return this.http.get(this.LogoutUrl);
  }
}
