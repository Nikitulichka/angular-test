import {  NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared.module';
import { HeaderComponent } from '../components/header/header.component';



@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        HomeRoutingModule,
        SharedModule
    ],
    providers: []
})
export class HomeModule {
}
