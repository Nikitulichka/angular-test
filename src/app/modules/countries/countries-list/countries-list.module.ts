import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CountriesListComponent } from './countries-list.component';
import { SharedModule } from '../../../shared.module';

const routes = [
    {
        path     : '',
        component: CountriesListComponent
    }
];

@NgModule({
    declarations: [
        CountriesListComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class CountriesListModule
{

}
