import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', component: UsersComponent,
                children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'list', loadChildren: './users-list/users-list.module#UsersListModule' },
                    { path: 'edit/:id', loadChildren: './users-form/users-form.module#UsersFormModule' },
                    { path: 'new', loadChildren: './users-form/users-form.module#UsersFormModule' }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
