import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
})
export class PieChartComponent implements OnInit {
  public data: Object[];
  public legendSettings!: Object;

  constructor() {
    this.data = [
      { name: 'Used Space', value: 80, text: '80%'},
      { name: 'Free Space', value: 20, text: '20%'}

    ];  
   }

  ngOnInit(): void {
    this.legendSettings = {
      visible: false
    }
  }

}
