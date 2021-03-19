import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringCut'
})
export class StringCutPipe implements PipeTransform {

  transform(str: string): string {
    str ? null : str = "No title"
    str = str[0].toUpperCase() + str.toLocaleLowerCase().slice(1);
    str = str.length>25? str.slice(0,24)+ '...': str
    return str
  }

}
