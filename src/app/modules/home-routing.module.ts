import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: HomeComponent, children: [
                    {
                        path: 'users',
                        loadChildren: './users/users.module#UsersModule',
                    },
                    {
                        path: 'countries',
                        loadChildren: './countries/countries.module#CountriesModule',
                    },
                    {
                        path: 'user-countries',
                        loadChildren: './user-countries/user-countries.module#UserCountriesModule',
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
