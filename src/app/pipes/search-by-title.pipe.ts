import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByTitle',
  pure: false
})
export class SearchByTitlePipe implements PipeTransform {
  transform(hits: any[], title: string): any[] {
    if (!hits) {
      return [];
    } else if (!title) {
      return hits;
    }

    const TITLE = title.toLowerCase();
    return hits.filter(hit => {
      return hit.title.toLowerCase().includes(TITLE);
    });
  }
}
