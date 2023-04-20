import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlatAddService {
  baseUrl = "http://localhost:3000/";

  constructor(private http :HttpClient) { }


postflat(data:any){
  return this.http.post(this.baseUrl+'postFlat',data)
}
}
