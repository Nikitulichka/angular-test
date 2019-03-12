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

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ...materialModules
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
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
