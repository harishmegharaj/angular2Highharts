import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { WebApiObservableService } from './web-api-observable.service';
import { DataService } from './data.service';

declare var require: any;
export function highchartsFactory() {
  //return require('highcharts');
  const hc = require('highcharts');
  const dd = require('highcharts/modules/drilldown');
  const ex = require('highcharts/modules/exporting');
  const st = require('highcharts/modules/stock');

  dd(hc);
  ex(hc);
  st(hc);
  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [WebApiObservableService, DataService, { provide: HighchartsStatic, useFactory: highchartsFactory }],
  bootstrap: [AppComponent]
})
export class AppModule { }
