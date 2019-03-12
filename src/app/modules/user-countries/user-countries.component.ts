import { Component, OnInit } from '@angular/core';
import { animations } from '../../animations/animations';
import { Observable } from 'rxjs';
import { User } from '../users/state/users.model';
import { UsersService } from '../users/state/users.service';
import { UsersQuery } from '../users/state/users.query';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../countries/state/countries.service';
import { Country } from '../countries/state/country.model';
import { CountryQuery } from '../countries/state/country.query';

@Component({
    selector: 'app-user-counties',
    templateUrl: './user-countries.component.html',
    styleUrls: ['./user-countries.component.scss'],
    animations
})
export class UserCountriesComponent implements OnInit {
    filterForm: FormGroup;
    users$: Observable<User[]>;
    countries$: Observable<Country[]>;
    autocompleteInput = new FormControl();
    constructor(
        private usersService: UsersService,
        private countriesService: CountriesService,
        private usersQuery: UsersQuery,
        private countryQuery: CountryQuery,
        private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.users$ = this.usersQuery.selectAll();
        this.countries$ = this.countryQuery.selectAll();
        this.getUsers();
        this.getCountries();
        this.filterForm = this.formBuilder.group({
            user: ['', Validators.required],
            country: '',
            visited: 0,
            visa: 0
        });
    }

    autocomplete(e: string) {
        this._filter(e);
    }

    getUsers() {
        if (this.usersQuery.isPristine) {
            this.usersService.getUsers();
        }
    }

    getCountries() {
        if (this.usersQuery.isPristine) {
            this.countriesService.getCountries();
        }
    }

    private _filter(value) {
        const filterValue = value.toLowerCase();

        this.countries$ = this.countryQuery.selectAll({
            filterBy: entity => entity.name.toLowerCase().includes(filterValue)
        });
    }


}
