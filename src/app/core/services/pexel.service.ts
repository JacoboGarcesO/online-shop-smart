import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiToImageMapper } from '../mappers/api-to-image.mapper';
import { HttpService } from './general/http.service';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';
import { IImage } from '../models/image.model';
import { URL_RESOURCES } from '../resources/url.resources';

@Injectable({
  providedIn: 'root'
})
export class PexelService {
  get headers(): HttpHeaders {
    return new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', environment.pexelSecretKey);
  }

  constructor(
    private readonly http: HttpService,
    private readonly apiToMapper: ApiToImageMapper
  ) { }

  getImage(keyword: string): Observable<IImage> {
    const url = URL_RESOURCES.pexel(keyword);
    return this.http.get<IImage>(url, this.headers).pipe(
      map((response) => this.apiToMapper.map(response))
    );
  }
}
