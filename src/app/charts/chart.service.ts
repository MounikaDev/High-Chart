import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ChartService {
  private url = environment.url;

  constructor(private httpClient: HttpClient) {}

  getUserData() {
    return this.httpClient.get(this.url);
  }
}
