import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { Country } from '../../../models/Country';
import { CountryStore } from './country.store';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
      private http: HttpClient,
      private countryStore: CountryStore
      ) { }

    getCountries() {
        this.http.get('/countries').subscribe((data: Country[]) => {
            this.countryStore.set(data);
        });
    }

    getCountry(id) {
        this.http.get(`/countries/${id}`).subscribe((data: Country) => {
            this.countryStore.add(data);
        });
    }
    addCountry(country: Country) {
        this.http.post('/countries', country).subscribe((data: Country) => {
            this.countryStore.add(data);
        });
    }
}
