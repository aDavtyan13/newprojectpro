import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.css']
})
export class DatepipeComponent implements OnInit {

  // birthday = new Date();
  // birthday = new Date('2019.01.02');
  birthday = new Date(2019,2,3);

  constructor() { }

  ngOnInit() {
  }

}
