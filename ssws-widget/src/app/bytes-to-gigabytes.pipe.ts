import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytesToGigabytes'
})
export class BytesToGigabytesPipe implements PipeTransform {

  transform(bytes: number): number {
    let out = bytes / Math.pow(10, 9)
    if(out < 1) {
      out *= 10000;
    }
    return out;
  }

}
