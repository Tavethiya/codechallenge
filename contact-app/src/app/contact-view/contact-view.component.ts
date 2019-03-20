import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Contact } from '../shared/models/contact.model';
import { ContactService } from '../shared/services/contact.service';
import { DebugRenderer2 } from '@angular/core/src/view/services';
@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

   contact = new Contact();

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.contactService.getContact(params.id).subscribe(res => {
          this.contact = res;
      });
    });
  }

}
