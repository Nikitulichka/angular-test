import { Component, OnInit } from '@angular/core';
import { animations } from '../../../animations/animations';
import { Observable } from 'rxjs';
import { Country } from '../state/country.model';
import { CountriesService } from '../state/countries.service';
import { CountryQuery } from '../state/country.query';
import { Router } from '@angular/router';


@Component({
    selector   : 'app-countries-list',
    templateUrl: './countries-list.component.html',
    styleUrls  : ['./countries-list.component.scss'],
    animations
})
export class CountriesListComponent implements OnInit {
    countries$: Observable<Country[]>;
    selectLoading$: Observable<boolean>;
    constructor(
        private countriesService: CountriesService,
        private countryQuery: CountryQuery,
        private router: Router) {
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

    editCountry(id) {
        this.router.navigate(['/countries/edit', id]);
    }
}
