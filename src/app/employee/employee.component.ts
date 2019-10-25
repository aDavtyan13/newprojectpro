import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees = [
    {id: 'emp-1', name: 'Robert', gender: 'Male', birthDate : new Date('01.02.1990')},
    {id: 'emp-2', name: 'Anna', gender: 'Female', birthDate : new Date('01.02.1990')},
    {id: 'emp-3', name: 'Julie', gender: 'Female', birthDate : new Date('01.02.1990')},
    {id: 'emp-4', name: 'David', gender: 'Male', birthDate : new Date('01.02.1990')},
    {id: 'emp-5', name: 'Sophie', gender: 'Female', birthDate : new Date('01.02.1990')}
  ];

  constructor() { }

  ngOnInit() {
  }

}
