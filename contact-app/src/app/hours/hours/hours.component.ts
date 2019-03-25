import { Component, OnInit } from '@angular/core';
import { HourService } from '../../shared/services/hour.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  title = 'Hours';
  rows = [];
  columns = [
    { prop: 'comments', name: 'Comments' },
    { name: 'Hours' }
  ];

  OnDelete(id) {
    this.hourService.delete(id).subscribe(res => {
      this.GetHours();
    });
  }

  GetHours() {
    this.hourService.get().subscribe((Data: any) => {
      this.rows = Data.data;
    });
  }
  public constructor(private hourService: HourService) {
    this.GetHours();
  }

  public ngOnInit(): void {
  }
}
