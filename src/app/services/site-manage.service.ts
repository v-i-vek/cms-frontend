import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiteManageService {

  Posturl = 'http://localhost:9000/postSite/'


  constructor( private http : HttpClient) { }

  sitePost(data:any){
  return this.http.post(this.Posturl,data)
  }
  
}

