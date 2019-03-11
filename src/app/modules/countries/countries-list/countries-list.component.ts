import { Component, OnInit } from '@angular/core';
import { animations } from '../../../animations/animations';
import { Observable } from 'rxjs';


@Component({
    selector   : 'app-profile-settings',
    templateUrl: './countries-list.component.html',
    styleUrls  : ['./countries-list.component.scss'],
    animations
})
export class CountriesListComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
    }
}
