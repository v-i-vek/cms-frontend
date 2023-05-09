import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentuploadService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  postDocUpload(data:any){
    return this.http.post(this.baseUrl+'/docs',data)
  }

getDatauser( id: any) {
    return this.http.get(this.baseUrl+"/docs/" + id);
  }


}
