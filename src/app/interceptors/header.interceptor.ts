import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { storageFunction } from 'storage-function';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    storageFunction.toLocalStorage('HeaderInterceptor_befor:', req);
    const reqWithCustomHeader = req.clone({
      headers: req.headers.set(
        'Custom-Header',
        'Custom header value from interceptor'
      )
    });
    storageFunction.toLocalStorage(
      'HeaderInterceptor_after:',
      reqWithCustomHeader
    );
    return next.handle(reqWithCustomHeader);
  }
}
