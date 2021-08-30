import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public makeGetRequest<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url, { observe: 'response' }).pipe(
      map((res: HttpResponse<T>) => {
        return res.body;
      })
    );
  }

  public makePostRequest<T>(url: string, body?: any): Observable<T> {
    return this.httpClient.post<T>(url, body, { observe: 'response' }).pipe(
      map((res: HttpResponse<T>) => {
        return res.body;
      })
    );
  }

  public makePutRequest<T>(url: string, body?: any): Observable<T> {
    return this.httpClient.put<T>(url, body, { observe: 'response' }).pipe(
      map((res: HttpResponse<T>) => {
        return res.body;
      })
    );
  }

  public makePatchRequest<T>(url: string, body?: any): Observable<T> {
    return this.httpClient.patch<T>(url, body, { observe: 'response' }).pipe(
      map((res: HttpResponse<T>) => {
        return res.body;
      })
    );
  }

  public makeDeleteRequest<T>(url: string, body?: any): Observable<T> {
    return this.httpClient
      .request<T>('delete', url, {
        body,
        observe: 'response'
      })
      .pipe(
        map((res: HttpResponse<T>) => {
          return res.body;
        })
      );
  }
}
