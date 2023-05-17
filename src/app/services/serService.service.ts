import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';
import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class SerServiceService {
  
  baseUrl = 'https://cms-s1i9.onrender.com/'
  

  constructor(private http : HttpClient) { }
servicePost(data:any){
    return this.http.post(this.baseUrl+"services",data)
    }
serviceGet(){
     
    return this.http.get(this.baseUrl+"service")
    }
serviceUpdate(data:any,id:any){
  
      return this.http.patch(this.baseUrl+"services/"+id,data)
    }
serviceDelete(id:any){
    
      return this.http.delete(this.baseUrl+"services/"+id)
    }
addService(data:any) {
  return this.http.post(this.baseUrl+"api/services",data)
}
getUserSeervices() {
  return this.http.get(this.baseUrl + "user/services")
}
  }
  
  

