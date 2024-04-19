import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IMapperOut } from '../../models/mapper.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private readonly http: HttpClient
  ) { }

  get<T>(url: string, headers: HttpHeaders): Observable<T> {
    return this.http.get<T>(url, {
      headers,
    })
      .pipe(
        catchError((error) => throwError(() => ({ error })))
      );
  }

  post<T>(url: string, body: T, mapper: IMapperOut<T>, headers: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, JSON.stringify(mapper.map(body)), {
      headers,
    })
      .pipe(
        catchError((error) => throwError(() => ({ error })))
      );
  }

  put<T>(url: string, body: T, mapper: IMapperOut<T>, headers: HttpHeaders): Observable<T> {
    return this.http.put<T>(url, JSON.stringify(mapper.map(body)), {
      headers,
    })
      .pipe(
        catchError((error) => throwError(() => ({ error })))
      );
  }

  delete<T>(url: string, headers: HttpHeaders): Observable<T> {
    return this.http.delete<T>(url, {
      headers,
    })
      .pipe(
        catchError((error) => throwError(() => ({ error })))
      );
  }
}
