import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersFormComponent } from './users-form.component';
import { SharedModule } from '../../../shared.module';

const routes = [
    {
        path     : '',
        component: UsersFormComponent
    }
];

@NgModule({
    declarations: [
        UsersFormComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class UsersFormModule
{

}
