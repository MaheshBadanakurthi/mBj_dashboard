import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit{

public chart:any
  ngOnInit(): void {
    this.barGraph()
  }


  public barGraph():void{
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-June', '2022-July', '2022-Aug','2022-Oct',
                 '2022-Nov', '2022-Dec' ],
         datasets: [
          {
            label: "Investments",
            data: ['467','576', '572', '179', '292','303'],
            backgroundColor: 'orange  '
          },
          {
            label: "Profit",
            data: ['542', '642', '576', '217', '257','387'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:3.5
      }

    });
  }


}
