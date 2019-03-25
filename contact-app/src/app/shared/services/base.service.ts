import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(public http, public router, private api) {
  }

  // Get All Contact
  public get(): any {
    return this.http.get(environment.apiBaseUrl + this.api);
  }

  public getById(id): any {
    return this.http.get(environment.apiBaseUrl + this.api + '/' + id);
  }

  // Insert New Contact
  public add(data: any) {
    return this.http.post(environment.apiBaseUrl + this.api, data);
  }

  // Delete Single Contact
  public delete(id) {
    return this.http.delete(environment.apiBaseUrl + this.api + '/' + id);
  }

  // Update a Contact
  public put(data: any) {
    return this.http.put(environment.apiBaseUrl + this.api + '/' + data.id, data);
  }

}
