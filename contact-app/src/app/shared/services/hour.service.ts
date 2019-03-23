import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Hour } from '../models/hour.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HourService {
  constructor(private http: HttpClient, private router: Router) {

  }

  // Get All Hour
  public getAllData(): any {
    return this.http.get(environment.apiBaseUrl + '/hours');
  }

  public getSingleData(id): any {
    return this.http.get(environment.apiBaseUrl + '/hours/' + id);
  }

  // Insert New Hour
  public addData(hour: Hour) {
    return this.http.post(environment.apiBaseUrl + '/hours', hour);
  }

  // Delete Single Hour
  public deleteData(id) {
    return this.http.delete(environment.apiBaseUrl + '/hours/' + id);
  }

  // Update a Hour
  public putData(hour: Hour) {
    return this.http.put(environment.apiBaseUrl + '/hours/' + hour.id, hour);
  }

}
