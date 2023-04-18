import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  public LoginURL = "http://localhost:3001/login";
  constructor(private http: HttpClient) { 
    
  }
  
  LoginForm(data:any){
    return this.http.post(this.LoginURL,data)
  }
}
