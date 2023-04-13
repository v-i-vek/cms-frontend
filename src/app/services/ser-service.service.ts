import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class SerServiceService {
  
  Posturl = 'http://localhost:3000/services'
  GetUrl = 'http://localhost:3000/service'
  patchUrl = 'http://localhost:3000/services/'
  deleteUrl ='http://localhost:3000/services/'

  constructor(private http : HttpClient) { }
  servicePost(data:any){
    return this.http.post(this.Posturl,data)
    }
    serviceGet(){
      return this.http.get(this.GetUrl)
    }
    serviceUpdate(data:any,id:any){
  
      return this.http.patch(this.patchUrl+id,data)
    }
    serviceDelete(id:any){
      return this.http.delete(this.deleteUrl+id)
    }
  }
  
  

