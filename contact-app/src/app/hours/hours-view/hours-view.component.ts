import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Hour } from '../../shared/models/hour.model';
import { HourService } from '../../shared/services/hour.service';
@Component({
  selector: 'app-hour-view',
  templateUrl: './hours-view.component.html',
  styleUrls: ['./hours-view.component.css']
})
export class HourViewComponent implements OnInit {

  hour = new Hour();

  constructor(private activatedRoute: ActivatedRoute, private hourService: HourService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.hourService.getById(params.id).subscribe(res => {
        this.hour = res;
      });
    });
  }

}
