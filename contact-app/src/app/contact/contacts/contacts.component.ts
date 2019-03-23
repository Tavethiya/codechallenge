import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../shared/services/contact.service';
import { Common } from '../../shared/services/common.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent extends Common implements OnInit {
  title = 'Contacts';
  rows = [];
  columns = [
    { prop: 'name', name: 'Name' },
    { name: 'Gender' },
    { name: 'Email' },
    { name: 'Amount' },
    { prop: 'dob', name: 'Date of Birth' }
  ];

  public constructor(private contactService: ContactService) {
    super(contactService);
    this.GetContacts(); // Calling Common class method diractly
  }

  OnDelete(id) {
    this.delete(id).subscribe(res => {
      this.GetContacts();
    });
  }

  GetContacts() {
    this.getAll().subscribe((data: any) => {
      this.rows = data.data;
    });
  }

  public ngOnInit(): void {
  }
}
