import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombrePipe',
  standalone: true
})
export class NombrePipePipe implements PipeTransform {


  transform(value: any[], patron: string): any[] {
    if (value && value.length) {
      return value.filter(a=>a.title.toLowerCase().includes(patron.toLowerCase()));
    }
    else
    return []
  }

}



