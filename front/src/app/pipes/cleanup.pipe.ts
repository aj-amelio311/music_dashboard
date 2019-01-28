import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanup'
})
export class CleanupPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace("[FRESH]", "").replace("[FRESH ALBUM]", "").replace("[FRESH VIDEO]", "").replace("[FRESH EP]", "").replace("[FRESH CHART]", "").replace("[FRESH PERFORMANCE]", "").replace("[FRESH INTERVIEW]", "");
  }

}
