import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries.component';
import { SharedModule } from '../../shared.module';
import { CountriesRoutingModule } from './countries-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        CountriesRoutingModule
    ],
    declarations: [CountriesComponent]
})
export class CountriesModule {
}
