import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power-calculator',
  templateUrl: './power-calculator.component.html',
  styleUrls: ['./power-calculator.component.css']
})
export class PowerCalculatorComponent implements OnInit {

  power = 5;
  factor = 1;

  constructor() { }

  ngOnInit() {
  }

}
