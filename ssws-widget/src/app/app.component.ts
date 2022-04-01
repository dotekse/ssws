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
  constructor() {}
}
