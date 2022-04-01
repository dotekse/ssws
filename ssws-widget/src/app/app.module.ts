import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
import { DriveWidgetComponent } from './drive-widget/drive-widget.component';
import { DataService } from './services/data.service';
import { BytesToGigabytesPipe } from './bytes-to-gigabytes.pipe';
import { AccumulationChartModule, PieSeriesService } from '@syncfusion/ej2-angular-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    DriveWidgetComponent,
    BytesToGigabytesPipe,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AccumulationChartModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [
    DataService,
    BytesToGigabytesPipe,
    PieSeriesService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
