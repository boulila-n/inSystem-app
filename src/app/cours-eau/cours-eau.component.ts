import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CanvasJS } from 'src/assets/canvasjs.angular.component';
import { Chronique } from '../common/chronique.model';
import { TempEauService } from '../common/temp-eau.service';

export class Axe {
  y:number = 0;
  x:number =0;
 };
@Component({
  selector: 'cours-eau',
  templateUrl: './cours-eau.component.html',
  styleUrls: ['./cours-eau.component.css']
})
export class CoursEauComponent  {

  codeDep : string = '05027010';

  resultats : Array<Chronique> = [];
  arrayXY : Array<Axe> = [];

  dateUnique: Date = new Date();
 
  constructor(private tempService : TempEauService) { }
  
  chart: any;
	
	chartOptions = {
	  animationEnabled: true,
	  theme: "light2",
	  title:{
		text: "Mesure Température d'eau	 le " + this.dateUnique.toLocaleDateString()
	  },
	  axisX:{
		title :"Heure de mesure"
	  },
	  axisY: {
		title: "Température d'eau"
	  },
	  toolTip: {
		shared: true
	  },
	  legend: {
		cursor: "pointer",
		itemclick: function (e: any) {
			if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			} 
			e.chart.render();
		}
	  },
	  data: [{
		type: "line",
		showInLegend: true,
		name: "Timing",
		dataPoints: this.arrayXY
	  }]
	}	  

  getChartInstance(chart: object) {
		this.chart = chart;
		setTimeout(this.updateChart, 500);
	}
	updateChart = () => {
	
    this.getChroniqueResult();
	if(this.resultats && this.resultats.length > 0) {
		this.dateUnique = this.resultats.map(x => x.date_mesure_temp)[0];
		this.resultats.filter(x => x.date_mesure_temp === this.dateUnique).forEach(r => this.arrayXY.push({x:Number(r.heure_mesure_temp.substring(0,2)),y:r.resultat}));
	  }
	  
		  this.chart.render();
		setTimeout(this.updateChart, 500); 
	}	


  ngOnInit(): void {
	this.getChroniqueResult();
	this.dateUnique = this.resultats.map(x => x.date_mesure_temp)[0];

    if(this.resultats && this.resultats.length > 0) {
		this.resultats.filter(x => x.date_mesure_temp === this.dateUnique).forEach(r => this.arrayXY.push({x:Number(r.heure_mesure_temp.substring(0,2)),y:r.resultat}));
	  }
	  
		  this.chart.render();
  }

  getChroniqueResult() : void { 
    const size :number = 10;
    this.tempService.getResult(this.codeDep, size).subscribe((response) => 
    {this.resultats = response
    },
    (error) => {
        //this.errorMessage = error.message; 
     })

  }
}
