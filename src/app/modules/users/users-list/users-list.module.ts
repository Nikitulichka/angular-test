import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list.component';
import { SharedModule } from '../../../shared.module';

const routes = [
    {
        path     : '',
        component: UsersListComponent
    }
];

@NgModule({
    declarations: [
        UsersListComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class UsersListModule
{

}
