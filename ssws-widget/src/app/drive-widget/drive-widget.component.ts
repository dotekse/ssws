import { Component, OnInit } from '@angular/core';
import { drives } from '../../assets/drives.json'

@Component({
  selector: 'app-drive-widget',
  templateUrl: './drive-widget.component.html',
  styleUrls: ['./drive-widget.component.sass']
})
export class DriveWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}