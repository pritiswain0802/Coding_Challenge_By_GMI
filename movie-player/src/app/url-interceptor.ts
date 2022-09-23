import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders
 } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ExchangedataService } from './exchangedata.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  constructor(private exchangedataService:ExchangedataService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // before send to request to url , get request url and set custom header to that url then send back to httprequest
    const customHeaderRequest = request.clone({
      headers: new HttpHeaders({
        source:  'Dhananjay'
      })
    });

    return next.handle(customHeaderRequest)
      .pipe(
        // retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          // send error msg to toast
          this.exchangedataService.showToastMessage(errorMessage);

          return throwError(errorMessage);
        })
      );
  }


 }
