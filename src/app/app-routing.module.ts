import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DatepipeComponent } from './datepipe/datepipe.component';
import { EmployeeComponent } from './employee/employee.component';
import { PowerCalculatorComponent } from './power-calculator/power-calculator.component';


const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'datepipe', component: DatepipeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'power', component: PowerCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
