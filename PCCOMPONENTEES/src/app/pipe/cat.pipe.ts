import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cat',
  standalone: true
})
export class CatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
