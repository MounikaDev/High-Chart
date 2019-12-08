import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LineChartComponent } from "./charts/line-chart/line-chart.component";
import { HttpClientModule } from "@angular/common/http";
import { ChartModule, HIGHCHARTS_MODULES } from "angular-highcharts";
import * as highstock from "highcharts/modules/stock.src";
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, LineChartComponent, DashboardComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ChartModule],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: () => [highstock] }],
  bootstrap: [AppComponent]
})
export class AppModule {}
