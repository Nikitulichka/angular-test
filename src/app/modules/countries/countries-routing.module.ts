import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CountriesComponent } from './countries.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: CountriesComponent,
                children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full'},
                    { path: 'list', loadChildren: './countries-list/countries-list.module#CountriesListModule' },
                    { path: 'edit/:id', loadChildren: './countries-form/countries-form.module#CountriesFormModule' },
                    { path: 'create/:id', loadChildren: './countries-form/countries-form.module#CountriesFormModule' },
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CountriesRoutingModule {
}
