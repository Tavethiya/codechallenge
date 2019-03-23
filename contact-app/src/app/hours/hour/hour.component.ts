import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HourService } from '../../shared/services/hour.service';
import { Router } from '@angular/router';
import { Common } from '../../shared/services/common.service';
@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent extends Common implements OnInit {
  hourForm: FormGroup;
  submitted = false;
  title = 'Hours';
  constructor(private formBuilder: FormBuilder, private hourService: HourService, private router: Router) {
    super(hourService);
   }

  ngOnInit() {
    this.hourForm = this.formBuilder.group({
      comments: ['', Validators.required],
      hours: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.hourForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.hourForm.invalid) {
      return;
    }

    this.add(this.hourForm.value).subscribe(res => {
      if (res) {
        alert('Hour Saved');
      } else {
        alert('Some Error while saving data please hour an admin');
      }
      this.router.navigateByUrl('/hours');
    }
    );

  }
}
