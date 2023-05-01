import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  getContacts(pageSize: number, currentPage: number) {
    const queryParams = `?pagesize=${pageSize}&page=${currentPage}`;
    return this.http.get<{ message: string, contacts: any }>('http://localhost:3000/getcontact' + queryParams);
  }

  deleteContact(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletecontact/${id}`);
  }
  postContact(data:any){
    return this.http.post(this.baseUrl+'/postcontact',data)
  }
}
