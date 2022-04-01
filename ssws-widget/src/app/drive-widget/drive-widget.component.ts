import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-drive-widget',
  templateUrl: './drive-widget.component.html',
  styleUrls: ['./drive-widget.component.sass']
})
export class DriveWidgetComponent implements OnInit {
  data = [];
  constructor(private dataService: DataService) {
    this.dataService.getJson().subscribe(data => {
      this.data = data
      console.log(data);
    });
  }

  ngOnInit(): void {}

  }
