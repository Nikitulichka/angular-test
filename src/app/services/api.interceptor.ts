import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const options: { url?: string, setHeaders?: any } = {};

        options.url = environment.apiurl + request.url;
        const headers: {
            'Content-Type': string,
            'Authorization'?: string
        } = { 'Content-Type': 'application/json' };
        options.setHeaders = headers;
        request = request.clone(options);
        return next.handle(request);
    }
}
