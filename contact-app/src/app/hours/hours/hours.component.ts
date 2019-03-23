import { Component, OnInit } from '@angular/core';
import { HourService } from '../../shared/services/hour.service';
import { Common } from '../../shared/services/common.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent extends Common implements OnInit {
  title = 'Hours';
  rows = [];
  columns = [
    { prop: 'comments', name: 'Comments' },
    { name: 'Hours' }
  ];

  OnDelete(id) {
    this.delete(id).subscribe(res => {
      this.GetHours();
    });
  }

  GetHours() {
    this.getAll().subscribe((Data: any) => {
      this.rows = Data.data;
    });
  }
  public constructor(private hourService: HourService) {
    super(hourService);
    this.GetHours();
  }

  public ngOnInit(): void {
  }
}
