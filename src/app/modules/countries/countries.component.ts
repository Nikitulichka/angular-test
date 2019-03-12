import { Component, OnInit } from '@angular/core';
import { animations } from '../../animations/animations';

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss'],
    animations
})
export class CountriesComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}
