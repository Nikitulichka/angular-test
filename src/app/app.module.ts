import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './services/api.interceptor';


const rootRoutes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    {
        path: '',
        loadChildren: './modules/home.module#HomeModule'
    }
    // auth routs
];



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        SharedModule,
        RouterModule.forRoot(rootRoutes),
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: APIInterceptor,
            multi: true
        },
    ]
})

export class AppModule {
}
