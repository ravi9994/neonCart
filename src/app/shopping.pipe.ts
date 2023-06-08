import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shopping'
})
export class ShoppingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
