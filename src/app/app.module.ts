import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepipeComponent } from './datepipe/datepipe.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeNamePipe } from './employeeName.pipe';
import { PowerCalculatorComponent } from './power-calculator/power-calculator.component';
import { BoostFactorPowerPipe } from './boostFactorPower.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DatepipeComponent,
    EmployeeNamePipe,
    EmployeeComponent,
    PowerCalculatorComponent,
    BoostFactorPowerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
