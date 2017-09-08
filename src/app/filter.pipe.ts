import {Pipe, PipeTransform} from '@angular/core';
import {Post} from './services/post';
@Pipe({
    name: 'filter',
    pure: false
})

export class FilterArrayPipe implements PipeTransform{
    transform(items: any[], filter: any): any[] {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => 
        {
           return item.title.indexOf(filter) !== -1;
        });
    }
}