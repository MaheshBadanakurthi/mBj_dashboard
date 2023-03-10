import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-jaguar',
  templateUrl: './jaguar.component.html',
  styleUrls: ['./jaguar.component.scss']
})
export class JaguarComponent implements OnInit {

  public chart: any;
  constructor(){      }
  public ngOnInit(): void {
    this.lineGraph()
   }
  images: { title:string, url:string}[] = [
    { title: 'Ever faced Edge turn, Try me to finish it. The RaceJaguar', url: 'https://wallpapercave.com/dwp1x/wp2803073.jpg' },
    { title: 'I love luxury, but in highway only.', url: 'https://wallpapercave.com/dwp1x/wc1697966.jpg' },
    { title: 'Me means calmness any passion racer.', url: 'https://wallpapercave.com/dwp1x/wp2803057.jpg' },
    { title: 'Test me directly at race. Believe me you would not hate me.', url: 'https://wallpapercave.com/dwp1x/wp2803106.jpg' },
  ];


 public lineGraph():void {
  this.chart = new Chart("MyChart", {
    type: 'line', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: ['2022-June', '2022-July', '2022-Aug','2022-Oct',
      '2022-Nov', '2022-Dec' ],
       datasets: [
        {
          label: "Sales",
          data: ['126','376', '272', '179', '292','340'],
          backgroundColor: 'red'
        },
        {
          label: "Profit",
          data: ['256', '442', '336', '327', '417', '412'],
          backgroundColor: 'limegreen'
        }
      ]
    },
    options: {
      aspectRatio:2.5
    }

  });

 }

}
