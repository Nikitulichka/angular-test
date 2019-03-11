import { Component, OnInit } from '@angular/core';
import { animations } from '../../../animations/animations';

@Component({
    selector   : 'app-profile-info',
    templateUrl: './countries-form.component.html',
    styleUrls  : ['./countries-form.component.scss'],
    animations
})
export class CountriesFormComponent implements OnInit
{
    constructor() {
    }

    ngOnInit() {
    }
}