import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Contact } from '../../shared/models/contact.model';
import { ContactService } from '../../shared/services/contact.service';
import { Common } from '../../shared/services/common.service';
@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent extends Common implements OnInit {

  contact = new Contact();

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService) {
    super(contactService);
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getSingle(params.id).subscribe(res => {
        this.contact = res;
      });
    });
  }

}
