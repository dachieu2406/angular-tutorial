import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, from?: number, length?: number): string {
    if(!value)
      return null;
    let fromNumber = from ? from : 0
    let lengthNumber = length ? length : 50
    return value.substr(fromNumber, lengthNumber) + '...';
  }

}
