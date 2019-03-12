import { Injectable } from '@angular/core';
import { QueryEntity, ID } from '@datorama/akita';
import { CountryState, CountryStore } from './country.store';
import { Country } from './country.model';

@Injectable({providedIn: 'root'})
export class CountryQuery extends QueryEntity<CountryState, Country> {
    constructor(protected store: CountryStore) {
        super(store);
    }
}
