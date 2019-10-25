import { PipeTransform, Pipe } from '@angular/core';



@Pipe({
    name: 'employeeName'
})
export class EmployeeNamePipe implements PipeTransform{
    transform(value:string, gender:string):string{
        if(gender == 'Male'){
            return 'Mr.'+ value;
        }
        else{
            return 'Mrs.'+ value;
        }
    
    }
}