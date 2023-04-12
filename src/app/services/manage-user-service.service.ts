import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class ManageUserServiceService {

 Port = 3000
  baseUrl = `http://localhost:${this.Port}/AddUser/`;

  GetUrl = "http://localhost:3000/getAllDetails";
  patchUrl = "http://localhost:3000/updateSite/";
  deleteUrl = "http://localhost:3000/deleteSite/";

  constructor(private http:HttpClient) { }



AddUser(data:any){
  return this.http.post(this.baseUrl,data)
}


}
