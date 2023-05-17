import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MaterialService {

  baseUrl = "https://cms-s1i9.onrender.com"
  url = "https://cms-s1i9.onrender.com/Postmaterial";
  patchUrl = "https://cms-s1i9.onrender.com/patchmaterial/";
  deleteUrl = "https://cms-s1i9.onrender.com/deletematerial/";

  constructor(private http: HttpClient) {}

  materialPost(data: any) {
    return this.http.post(this.url, data);
  }

  getMaterial() {
    return this.http.get("https://cms-s1i9.onrender.com/getmaterial/");
  }

  materialUpdate(id: any, data: any) {
    return this.http.patch(this.patchUrl + id, data);
  }
  deletematerial(id: any) {
    return this.http.delete(this.deleteUrl + id);
  }
}
