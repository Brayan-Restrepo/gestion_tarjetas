import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tarjeta'
})
export class TarjetaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
