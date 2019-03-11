import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CountriesFormComponent } from './countries-form.component';
import { SharedModule } from '../../../shared.module';

const routes = [
    {
        path     : '',
        component: CountriesFormComponent
    }
];

@NgModule({
    declarations: [
        CountriesFormComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class CountriesFormModule
{

}
