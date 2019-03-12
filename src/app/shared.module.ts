import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import { CountryStore } from './modules/countries/state/country.store';
import { UsersStore } from './modules/users/state/users.store';
import { ListComponent } from './components/list/list.component';
import { RouterModule } from '@angular/router';

const materialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
];

const components = [
    ListComponent
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        ...materialModules
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        ...components,
        ...materialModules
    ],

    providers: [
        HttpClient,
        CountryStore,
        UsersStore
    ]
})

export class SharedModule {

}
