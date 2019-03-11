import {  NgModule } from '@angular/core';

import { UserCountriesComponent } from './user-countries.component';
import { UserCountriesRoutingModule } from './user-countries-routing.module';
import { SharedModule } from '../../shared.module';



@NgModule({
    declarations: [
        UserCountriesComponent
    ],
    imports: [
        UserCountriesRoutingModule,
        SharedModule
    ],
    providers: []
})
export class UserCountriesModule {
}
