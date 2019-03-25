import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HourService } from '../../shared/services/hour.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})
export class HourComponent implements OnInit {
  hourForm: FormGroup;
  submitted = false;
  title = 'Hours';
  constructor(private formBuilder: FormBuilder, private hourService: HourService, private router: Router) {
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

    this.hourService.add(this.hourForm.value).subscribe(res => {
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
