import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  public LoginURL = "https://cms-s1i9.onrender.com/login";
  constructor(private http: HttpClient) { 
    
  }
  
  LoginForm(data:any){
    return this.http.post(this.LoginURL,data)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
}
