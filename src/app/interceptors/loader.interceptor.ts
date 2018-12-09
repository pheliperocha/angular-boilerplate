import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { LoaderService } from '../components/loader/services/loader.service';

@Injectable({
    providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

    constructor(private loaderService: LoaderService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.showLoader();
        return next.handle(req).pipe(
            delay(5000), // TODO: Remove this | it's to simulate a delayed response from server
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.onEnd();
                }
            }, () => {
                this.onEnd();
            })
        );
    }

    private onEnd(): void {
        this.hideLoader();
    }

    private showLoader(): void {
        this.loaderService.show();
    }

    private hideLoader(): void {
        this.loaderService.hide();
    }
}