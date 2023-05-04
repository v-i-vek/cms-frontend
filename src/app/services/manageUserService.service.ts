import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class ManageUserServiceService {

 Port = 3000
public baseUrl = `http://localhost:${this.Port}/`;

 

  constructor(private http:HttpClient) { }



AddUser(data:any){
  return this.http.post(this.baseUrl+"AddUser/",data)
}
getUser(){
  return this.http.get(this.baseUrl+"AddUser")
}

getsingleUser(id:any){
  return this.http.get(this.baseUrl+"AddUser/single/"+id)
}

updateUser(id:any,data:any){
  return this.http.put(this.baseUrl+"AddUser/"+id,data)
}
updateUserAdmin(id:any,data:any){
  return this.http.put(this.baseUrl+"AddUser/admin/"+id,data)
}

sendMail(id){
  return this.http.get(this.baseUrl+"AddUser/mail/"+id)
}
}
