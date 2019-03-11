import { Component, OnInit } from '@angular/core';
import { animations } from '../../animations/animations';

@Component({
    selector: 'app-auth',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss'],
    animations
})
export class CountriesComponent implements OnInit {

    expandedMenu: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    toggleMenu() {
        this.expandedMenu = !this.expandedMenu;
    }

}
