import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { EvenementService } from 'src/app/Services/evenement.service';

@Component({
  selector: 'app-stats-events',
  templateUrl: './stats-events.component.html',
  styleUrls: ['./stats-events.component.css']
})
export class StatsEventsComponent implements OnInit {
NBE!:any;
NBC:any;
NBF:any;
NBTT:any;
NBTF:any;
BarChart:any;
PieChart:any;
RadarChart:any;
barChartOptions:any;
   ChartEvents: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Events',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  
  ChartnbrChallenges: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Challenges',
        fill: true,
        borderColor: 'black',
        backgroundColor: 'rgba(85,0,0,0.3)'
      }
    ]
  };
  
  ChartnbrFormation: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Formation',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: '#7367f0'
      }
    ]
  };

  

  
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false
  };
  public radarChartOptions: ChartOptions<'radar'> = {
    responsive: false
  };

  public lineChartLegend = true;
  public lineChartPlugins = [];

  constructor(private es:EvenementService) {

   }

  ngOnInit():void {
    this.NBE=0
    this.NBC=0;
    this.NBF=0;
    this.NBTF=0;
    this.NBTT=0;
this.FindNumberChallenges();
this.FindNumberEvents();
this.FindNumberFormation();

  }
  FindNumberEvents(){
this.es.TotalNumberEvents().subscribe((data)=>{
this.NBE=data

})
  }
  FindNumberChallenges(){
    this.es.TotalNumberEventsChallenge().subscribe((data)=>{
      this.NBC=data
      })
  }
  FindNumberFormation(){
    this.es.TotalNumberEventsFormation().subscribe((data)=>{

      this.NBF=data
      
      const BarChart: ChartConfiguration<'bar'>['data'] = {
        labels: [
          'Formations',
          'Challenges',
        ],
        datasets: [
          {
            data: [ this.NBF,this.NBC],
            label: 'Events',
            borderColor: 'black',
            backgroundColor: ['#e53f71','#1e5571']
          }
        ]
      };
      this.BarChart=BarChart

      const PieChart: ChartConfiguration<'pie'>['data'] = {
        labels: [
          'Formation',
          'Challenge'
        ],
        datasets: [
          {
            data: [ this.NBF, this.NBC ],
            label: 'Formation',
            borderColor: '#1c4e6d',
            backgroundColor: ['#e53f71','#1e5571']
          }
        ]
      };
      this.PieChart=PieChart;
console.log(this.NBTF)
this.es.TotalNumberEventsTrouphyTrue().subscribe((data)=>{
  this.NBTT=data;
  this.es.TotalNumberEventsTrouphyFalse().subscribe((data)=>{
    this.NBTF=data;
    const RadarChart: ChartConfiguration<'radar'>['data'] = {
      labels: [
        'Challenge',
        'Formation',
        'WithTrouphy',
        'WithoutTrouphy'
      ],
      datasets: [
        {
          data: [ this.NBF, this.NBC,this.NBTT,this.NBTF ],
          label: 'Events',
          borderColor: 'black',
          backgroundColor: '#1e5571'
        }
      ]
    };
    this.RadarChart=RadarChart;
  })
})

     
      })
  }
  /**** */

}
