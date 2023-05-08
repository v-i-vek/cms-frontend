import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { data } from "jquery";

@Injectable({
  providedIn: "root",
})
export class SiteManageService {
  baseUrl = "http://localhost:3000/";
 

  constructor(private http: HttpClient) {}

  sitePost( formData: any) {
    return this.http.post(this.baseUrl+"postSite", formData);
  }
  siteGet() {
    console.log(this.baseUrl+"getAllDetails")
    return this.http.get(this.baseUrl+"getAllDetails");
  }
  siteUpdate(data: any, id: any) {
    return this.http.patch(this.baseUrl+"updateSite/" + id, data);
  }
  siteDelete(id: any) {
    return this.http.delete(this.baseUrl+"deleteSite/" + id);
  }
  siteStatusUpdate(id:any,data){
    return this.http.patch(this.baseUrl+"updataStatus/"+id,data)
  }
}
