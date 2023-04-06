import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class SiteManageService {

  Posturl = 'http://localhost:3001/postSite/'
  GetUrl = 'http://localhost:3001/getAllDetails'
  patchUrl = 'http://localhost:3001/updateSite/:id'
  deleteUrl ='http://localhost:3001/deleteSite/:id'


  constructor( private http : HttpClient) { }

  sitePost(data:any){
  return this.http.post(this.Posturl,data)
  }
  siteGet(){
    return this.http.get(this.GetUrl)
  }
  siteUpdate(data:any,id:any){
    return this.http.put(`${this.patchUrl}${id}`,data)
  }
  siteDelete(){
    return this.http.delete(this.deleteUrl)
  }
}

