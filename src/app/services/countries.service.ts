import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

    getCountries(): Observable<Array<Country>> {
        return this.http.get('/counties?_sort=id&_order=desc').pipe(map((res: Country[]) => {
            return res;
        }));
    }
}
