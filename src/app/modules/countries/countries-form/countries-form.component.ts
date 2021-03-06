import { Component, OnInit} from '@angular/core';
import { animations } from '../../../animations/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../state/countries.service';
import { CountryQuery } from '../state/country.query';

@Component({
    selector   : 'app-countries-form',
    templateUrl: './countries-form.component.html',
    styleUrls  : ['./countries-form.component.scss'],
    animations,
})
export class CountriesFormComponent implements OnInit {
    countryForm: FormGroup;
    pageType: string;
    country$ = this.countryQuery.selectEntity(this.countryId);
    constructor(private formBuilder: FormBuilder,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private countryQuery: CountryQuery,
                private countriesService: CountriesService) {
        this.countryForm = this.createCountryForm();
    }

    ngOnInit() {
        if (this.countryId) {
            this.pageType = 'edit';
            if (this.countryQuery.hasEntity(this.countryId) === false) {
                this.countriesService.getCountry(this.countryId);
            }
        }
    }

    createCountryForm() {
        return this.formBuilder.group({
            name: ['', Validators.required],
        });
    }

    addCountry() {
        this.countriesService.addCountry(this.countryForm.value);
    }

    saveCountry() {
        this.countriesService.updateCountry(this.countryForm.value, this.countryId);
    }

    get countryId() {
        return this.activatedRoute.snapshot.params.id;
    }
}
