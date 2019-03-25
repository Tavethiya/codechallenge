import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { BaseService } from '../services/base.service';
@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseService {

  constructor(public http: HttpClient, public router: Router) {
    super(http, router, '/contacts');
  }
}
