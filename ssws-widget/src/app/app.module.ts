import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccumulationDataLabelService, ChartModule, DataLabel } from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
import { DriveWidgetComponent } from './drive-widget/drive-widget.component';
import { DataService } from './services/data.service';
import { BytesToGigabytesPipe } from './bytes-to-gigabytes.pipe';
import { AccumulationChartModule, PieSeriesService } from '@syncfusion/ej2-angular-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';


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
    ChartModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [
    DataService,
    BytesToGigabytesPipe,
    PieSeriesService,
    AccumulationDataLabelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
