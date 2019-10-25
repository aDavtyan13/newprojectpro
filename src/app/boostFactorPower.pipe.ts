import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'bostFactor'
})

export class BoostFactorPowerPipe implements PipeTransform {
    // transform (power: number,factor: number): number {
    //     return power + factor;
    // }

    transform(value: number,exponent: number):number{
        return value ** exponent;
    }
}