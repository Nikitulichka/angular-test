import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CountryStore } from './modules/countries/state/country.store';
import { UsersStore } from './modules/users/state/users.store';
import { ListComponent } from './components/list/list.component';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';


const materialModules = [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule
];

const components = [
    ListComponent
];

const modules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
];

@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        ...modules,
        ...materialModules
    ],
    exports: [
        ...modules,
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
