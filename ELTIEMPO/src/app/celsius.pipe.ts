import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius',
  standalone: true
})
export class CelsiusPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value - 273);
  }

}
