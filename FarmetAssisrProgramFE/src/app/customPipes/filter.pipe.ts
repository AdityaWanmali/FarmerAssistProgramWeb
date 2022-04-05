import { Pipe, PipeTransform } from '@angular/core';
import { Supplier } from '../supplier';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm: any): any {
    return value.filter(function (search: { supplierName: string | any[] }) {
      return search.supplierName.indexOf(searchTerm) > -1;
    });
  }
}
