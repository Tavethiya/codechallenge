import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { Contact } from '../models/contact.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient, private router: Router) {

  }

  // Get All Contact
  getContacts(): any {
    return this.http.get(environment.apiBaseUrl + '/contacts');
  }

  getContact(id): any {
    return this.http.get(environment.apiBaseUrl + '/contacts/' + id);
  }

  // Insert New Contact
  postContact(contact: Contact) {
    return this.http.post(environment.apiBaseUrl + '/contacts', contact);
  }

  // Delete Single Contact
  deleteContact(id) {
    return this.http.delete(environment.apiBaseUrl + '/contacts/' + id);
  }

  // Update a Contact
  putContact(contact: Contact) {
    return this.http.put(environment.apiBaseUrl + '/contacts/' + contact.id, contact);
  }

}
