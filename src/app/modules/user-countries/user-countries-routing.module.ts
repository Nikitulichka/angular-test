import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserCountriesComponent } from './user-countries.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: UserCountriesComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class UserCountriesRoutingModule {
}
