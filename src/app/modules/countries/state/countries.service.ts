import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { Country } from '../../../models/Country';
import { CountryStore } from './country.store';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
      private http: HttpClient,
      private countryStore: CountryStore,
      private router: Router,
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
            this.router.navigate(['/countries/list']);
        });
    }
}
