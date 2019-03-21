import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class ServerService {
  constructor(private http: Http) {}

  storeServers(servers: any[]) {
    const headers = new Headers({ "Content-Type": "application/json" });
    return this.http.put(
      "https://udemy-angular-schwarz-http.firebaseio.com/data.json",
      servers,
      { headers: headers }
    );
  }

  getServers() {
    return this.http.get(
      "https://udemy-angular-schwarz-http.firebaseio.com/data.json"
    );
  }
}
