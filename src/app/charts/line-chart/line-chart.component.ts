import { Component, OnInit } from "@angular/core";
import { ChartService } from "../chart.service";
import { StockChart } from "angular-highcharts";

@Component({
  selector: "app-line-chart",
  template: `
    <div [chart]="stock"></div>
  `
})
export class LineChartComponent implements OnInit {
  stock: StockChart;

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.chartService.getUserData().subscribe((userdata: any) => {
      this.stock = new StockChart({
        rangeSelector: {
          selected: 1
        },
        title: {
          text: "User data for last 7 days"
        },
        series: [
          { type: "line", data: userdata, tooltip: { valueDecimals: 2 } }
        ]
      });
    });
  }
}
