import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Common } from '../../shared/services/common.service';
import { ContactService } from '../../shared/services/contact.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends Common implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  title = 'Contacts';
  constructor(private formBuilder: FormBuilder, private contactService: ContactService, private router: Router) {
    super(contactService);
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['Male', [Validators.required]],
      amount: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  OnSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
    this.add(this.contactForm.value).subscribe(res => {
      if (res) {
        alert('Contact Saved');
      } else {
        alert('Some Error while saving data please contact an admin');
      }
      this.router.navigateByUrl('/contacts');
    }
    );
  }
}
