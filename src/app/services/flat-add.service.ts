import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlatAddService {
  baseUrl = "https://cms-s1i9.onrender.com";

  constructor(private http :HttpClient) { }


postflat(data:any){
  return this.http.post(this.baseUrl+'postFlat',data)
}
}
