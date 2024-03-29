import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrocat',
  standalone: true
})
export class FiltrocatPipe implements PipeTransform {
  
  transform(value: any[], cat: number): any[] {
    if(value && value.length){
      if(cat>0){
        return value.filter(a=>a.cat==cat)
      }
      else
      return value
    }
    else
    return [];
  }

}
