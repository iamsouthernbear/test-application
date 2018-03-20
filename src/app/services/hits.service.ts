import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class HitsService {

  constructor(private http: HttpClient) { }

  public getHits() {
    const URL = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
    return Observable.create((observer: Observer<Object[]>) => {
      this.http.get(URL).subscribe(
        response => observer.next(response['hits']),
        errors => observer.error(errors)
      );
    });
  }

}
