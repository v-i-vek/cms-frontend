import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class ManageUserServiceService {

 Port = 3000
  PostUrl = `http://localhost:${this.Port}/AddUser/`;

  GetUrl = `http://localhost:${this.Port}/AddUser`;
  patchUrl = `http://localhost:${this.Port}/AddUser/`;
  deleteUrl = "http://localhost:3000/deleteSite/";

  constructor(private http:HttpClient) { }



AddUser(data:any){
  return this.http.post(this.PostUrl,data)
}
getUser(){
  return this.http.get(this.GetUrl)
}

updateUser(data:any,id:any){
  return this.http.put(this.patchUrl+id,data)
}


}
