import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimspace'
})
export class TrimspacePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.trim().replace("&", "and").replace("'", "%27").replace("-", "%2D").replace(",", "%2C").replace(".", "%2E");
  }

}
