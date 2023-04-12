import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { data } from "jquery";

@Injectable({
  providedIn: "root",
})
export class SiteManageService {
  Posturl = "http://localhost:3000/postSite/";
  GetUrl = "http://localhost:3000/getAllDetails";
  patchUrl = "http://localhost:3000/updateSite/";
  deleteUrl = "http://localhost:3000/deleteSite/";

  constructor(private http: HttpClient) {}

  sitePost( formData: any) {
    return this.http.post(this.Posturl, formData);
  }
  siteGet() {
    return this.http.get(this.GetUrl);
  }
  siteUpdate(data: any, id: any) {
    return this.http.patch(this.patchUrl + id, data);
  }
  siteDelete(id: any) {
    return this.http.delete(this.deleteUrl + id);
  }
}
