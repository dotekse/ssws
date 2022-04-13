import { Component, OnInit } from '@angular/core';
import { DriveInformation } from 'src/types';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-drive-widget',
  templateUrl: './drive-widget.component.html',
  styleUrls: ['./drive-widget.component.sass']
})
export class DriveWidgetComponent implements OnInit {
  data: any[] = [];
  pieData = [];
  datalabel = { visible: true };
  constructor(private dataService: DataService) {
    
  }

  ngOnInit(): void {
    
    this.dataService.getJson().subscribe(data => {
      this.data = this.transformToDataSource(data);
      console.log(this.data);
    });

    
  }


  
  transformToDataSource(data: any[]): DriveInformation[] {
    return data.map(d => ({ 
      machineName: d.MachineName,
      name: d.Name,
      totalSize: d.TotalSize,
      availableFreeSpace: d.AvailableFreeSpace,
      usageWarning: ((d.AvailableFreeSpace/d.TotalSize)*100 < 10)
     }))
  } 

}
