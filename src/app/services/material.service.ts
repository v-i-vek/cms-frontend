import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MaterialService {
  url = "http://localhost:3000/Postmaterial";
  patchUrl = "http://localhost:3000/patchmaterial/";
  deleteUrl = "http://localhost:3000/deletematerial/";

  constructor(private http: HttpClient) {}

  materialPost(data: any) {
    return this.http.post(this.url, data);
  }

  getMaterial() {
    return this.http.get("http://localhost:3000/getmaterial/");
  }

  materialUpdate(id: any, data: any) {
    return this.http.patch(this.patchUrl + id, data);
  }
  deletematerial(id: any) {
    return this.http.delete(this.deleteUrl + id);
  }
}
