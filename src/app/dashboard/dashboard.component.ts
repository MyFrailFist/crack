import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',
      '../../assets/icon/SVG-animated/svg-weather.css'
  ],
    encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) { }
    comboChartData =  {
        chartType: 'ComboChart',
        dataTable: [
            ['Week', 'Sales and Business', 'IT', 'Marketing', 'Operations', 'Finance', 'Human Resource'],
            ['16/04/2018', 0, 0, 0, 0, 0, 0],
            ['23/04/2018', 0, 2, 0, 0, 0, 0],
            ['30/04/2018', 0, 2, 0, 0, 0, 0],
            ['07/05/2018', 1, 2, 0, 0, 0, 0],
            ['14/05/2018', 1, 0, 1, 0, 0, 0]
        ],
        options: {
            height: 320,
            title: 'Number of Open Projects per Week',
            vAxis: { title: 'Open Projects' },
            hAxis: { title: 'Week' },
            seriesType: 'bars',
            bar: {groupWidth: '90%'},
            /*series: { 5: { type: 'line' } },*/
            colors: ['#e74c3c', '#2ecc71', '#5faee3', '#0073aa', '#f1c40f', '#9932CC']
        },
    };
    /*Polar chart*/
    type3 = 'polarArea';
    data3 = {
        datasets: [{
            data: [
                11,
                16,
                7,
                14
            ],
            backgroundColor: [
                '#7E81CB',
                '#1ABC9C',
                '#B8EDF0',
                '#01C0C8'
            ],
            hoverBackgroundColor: [
                '#a1a4ec',
                '#2adab7',
                '#a7e7ea',
                '#10e6ef'
            ],
            label: 'My dataset' // for legend
        }],
        legend: {
            display: false,
        },
        labels: [
            'Blue',
            'Green',
            'Light Blue',
            'Sea Green'
        ]
    };
    options3 = {
        elements: {
            arc: {
                borderColor: ''
            },
            labels: {
                display: false,
            }
        }
    };

  ngOnInit() {
      setTimeout( () => {
          /* visitors pie chart*/
          $('.visitor-chart').sparkline([1, 2], {
              type: 'pie',
              width: '100px',
              height: '65px',
              sliceColors: ['#ccc', '#0073aa'],
              tooltipClassname: 'chart-sparkline'
          });
          /* visitor total sale line chart */
          $('.sale-chart').sparkline([0, 6, 3, 10, 8, 3, 6, 15, 3, 14, 2, 9, 12, 0], {
              type: 'line',
              width: '100%',
              height: '65px',
              tooltipClassname: 'chart-sparkline',
              chartRangeMax: '50',
              lineColor: '#ccc',
              fillColor: '#ccc'
          });
          /* visitor total revenue chart */
          $('.resource-barchart').sparkline([5, 6, 2, 4, 9, 8, 3, 6, 4, 2], {
              type: 'bar',
              barWidth: '8px',
              height: '50px',
              barColor: '#239a55',
              tooltipClassname: 'abc'
          });

          /*custom line chart*/
          $('.customchart').sparkline([15, 30, 27, 35, 50, 71, 60], {
              type: 'line',
              width: 300,
              height: 300,
              tooltipClassname: 'chart-sparkline',
              chartRangeMax: '50',
              lineColor: '#0073aa',
              fillColor: 'rgba(0, 115, 170, 0.5)'
          });

          $('.customchart').sparkline([0, 25, 10, 7, 25, 35, 30], {
              type: 'line',
              width: 300,
              height: 300,
              composite: '!0',
              tooltipClassname: 'chart-sparkline',
              chartRangeMax: '40',
              lineColor: '#239a55',
              fillColor: 'rgba(35, 154, 85, .5)'
          });
      }, 1);
  }

  movePage(){
    this.router.navigate(['testPage1'])
  }
}
