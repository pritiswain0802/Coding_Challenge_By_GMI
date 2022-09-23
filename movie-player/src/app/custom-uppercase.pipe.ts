import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase'
})
export class CustomUppercasePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.toUpperCase();
  }

}
