import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimstring'
})
export class TrimstringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length > 20) {
      return value.substring(0, 20) + "...";
    } else {
      return value;
    }

  }

}
