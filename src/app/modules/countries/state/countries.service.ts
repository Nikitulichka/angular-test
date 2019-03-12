import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryStore } from './country.store';
import { Router } from '@angular/router';
import { Country } from './country.model';

@Injectable({providedIn: 'root'})
export class CountriesService {

  constructor(
      private http: HttpClient,
      private countryStore: CountryStore,
      private router: Router,
      ) {}

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

    updateCountry(name: string, id: number) {
        this.http.put(`/countries/${id}`, name).subscribe((data: Country) => {
            this.countryStore.update(data.id, {name: data.name});
            this.router.navigate(['/countries/list']);
        });
    }
}
