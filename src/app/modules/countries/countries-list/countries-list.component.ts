import { Component, OnInit } from '@angular/core';
import { animations } from '../../../animations/animations';
import { Observable } from 'rxjs';
import { Country } from '../state/country.model';
import { CountriesService } from '../state/countries.service';
import { CountryQuery } from '../state/country.query';


@Component({
    selector   : 'app-profile-settings',
    templateUrl: './countries-list.component.html',
    styleUrls  : ['./countries-list.component.scss'],
    animations
})
export class CountriesListComponent implements OnInit {
    countries$: Observable<Country[]>;
    selectLoading$: Observable<boolean>;
    constructor(
        private countriesService: CountriesService,
        private countryQuery: CountryQuery) {
    }

    ngOnInit() {
        this.countries$ = this.countryQuery.selectAll();
        this.selectLoading$ = this.countryQuery.selectLoading();
        this.getCountries();
    }

    getCountries() {
        if (this.countryQuery.isPristine) {
            this.countriesService.getCountries();
        }
    }
}
