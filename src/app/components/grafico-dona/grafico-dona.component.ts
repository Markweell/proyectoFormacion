import { Component, OnInit, Input } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.scss']
})
export class GraficoDonaComponent implements OnInit {
  @Input() Leyenda: string;
  @Input() doughnutChartLabels: Label[];
  @Input() doughnutChartData: number[];
  @Input() doughnutChartType: ChartType;

  constructor() { }

  ngOnInit() {
  }

}
