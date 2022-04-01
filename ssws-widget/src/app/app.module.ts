import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DriveWidgetComponent } from './drive-widget/drive-widget.component';
import { DataService } from './services/data.service';
import { BytesToGigabytesPipe } from './bytes-to-gigabytes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DriveWidgetComponent,
    BytesToGigabytesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    DataService,
    BytesToGigabytesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
