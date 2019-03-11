import { Component, OnInit, ViewChild } from '@angular/core';
import { animations } from '../../../animations/animations';
import { Observable } from 'rxjs';
import { Country } from '../state/country.model';
import { CountriesService } from '../../../services/countries.service';
import { CountryQuery } from '../state/country.query';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
    selector   : 'app-profile-settings',
    templateUrl: './countries-list.component.html',
    styleUrls  : ['./countries-list.component.scss'],
    animations
})
export class CountriesListComponent implements OnInit {
    countries$: Observable<Country[]>;
    selectLoading$: Observable<boolean>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    dataSource = new MatTableDataSource<Country>([]);
    constructor(
        private countriesService: CountriesService,
        private countryQuery: CountryQuery) {
    }

    ngOnInit() {
        this.countries$ = this.countryQuery.selectAll();
        this.selectLoading$ = this.countryQuery.selectLoading();
        this.getCountries();

       /* this.dataSource.data = data; //new data from store
        this.dataSource.paginator = this.paginator;*/

    }

    getCountries() {
        if (this.countryQuery.isPristine) {
            this.countriesService.getCountries();
        }
    }
}
