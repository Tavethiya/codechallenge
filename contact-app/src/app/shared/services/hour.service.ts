import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseService } from '../services/base.service';
@Injectable({
  providedIn: 'root'
})
export class HourService extends BaseService {

  constructor(public http: HttpClient, public router: Router) {
    super(http, router, '/hours');
  }
}
