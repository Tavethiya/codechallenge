import { Component, OnInit } from '@angular/core';
import { ContactService} from '../shared/services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  title = 'Contacts';
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name', name: 'Name' },
    { name: 'Gender' },
    { name: 'Email' },
    { name: 'Amount' },
    { prop: 'dob', name: 'Date of Birth' }
  ];

  OnDelete(id) {
    this.contactService.deleteContact(id).subscribe(res => {
      this.GetContacts();
    });
  }

  GetContacts() {
    const studentsObservable = this.contactService.getContacts();
    studentsObservable.subscribe((studentsData: any) => {
      this.rows = studentsData.data;
    });
  }
  public constructor(private contactService: ContactService) {
    this.GetContacts();
  }

  public ngOnInit(): void {
  }
}
