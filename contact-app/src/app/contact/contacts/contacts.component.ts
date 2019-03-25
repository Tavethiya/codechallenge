import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../shared/services/contact.service';
import { Contact } from 'src/app/shared/models/contact.model';
// import { Common } from '../../shared/services/common.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
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
    this.GetContacts(); // Calling Common class method diractly
  }

  OnDelete(id) {
    this.contactService.delete(id).subscribe(res => {
      this.GetContacts();
    });
  }

  GetContacts() {
    this.contactService.get().subscribe((data: any) => {
      this.rows = data.data;
    });
  }

  public ngOnInit(): void {
  }
}
