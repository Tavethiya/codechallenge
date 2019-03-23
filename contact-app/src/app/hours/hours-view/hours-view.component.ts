import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Hour } from '../../shared/models/hour.model';
import { HourService } from '../../shared/services/hour.service';
import { Common } from '../../shared/services/common.service';
@Component({
  selector: 'app-hour-view',
  templateUrl: './hours-view.component.html',
  styleUrls: ['./hours-view.component.css']
})
export class HourViewComponent extends Common implements OnInit {

  hour = new Hour();

  constructor(private activatedRoute: ActivatedRoute, private hourService: HourService) {
    super(hourService)
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getSingle(params.id).subscribe(res => {
        this.hour = res;
      });
    });
  }

}
