import { Component } from '@angular/core';
import { DataService } from './services/data.service';
//import * as data from '../assets';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ssws-widget';
  data = [];
  constructor(private dataService: DataService) {
    this.dataService.getJson().subscribe(data => {
      this.data = data
    });
  }
}
