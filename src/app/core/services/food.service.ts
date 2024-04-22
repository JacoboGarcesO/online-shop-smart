import { Injectable } from '@angular/core';
import { HttpService } from './general/http.service';
import { ToApiFoodMapper } from '../mappers/to-api-food.mapper';
import { ApiToFoodMapper } from '../mappers/api-to-food.mapper';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';
import { IFood } from '../models/food.model';
import { URL_RESOURCES } from '../resources/url.resources';
import { HttpHeaders } from '@angular/common/http';
import { PexelService } from './pexel.service';
import { IImage } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  get headers(): HttpHeaders {
    return new HttpHeaders()
      .append('Content-Type', 'application/json');
  }

  constructor(
    private readonly http: HttpService,
    private readonly pexelService: PexelService,
    private readonly toApiMapper: ToApiFoodMapper,
    private readonly apiToMapper: ApiToFoodMapper
  ) { }

  getAll(): Observable<IFood[]> {
    const url = URL_RESOURCES.food;
    return this.http.get<IFood[]>(url, this.headers).pipe(
      map((response) => response.map(this.apiToMapper.map))
    );
  }

  getAllWithImage(): Observable<IFood[]> {
    const url = URL_RESOURCES.food;
    return this.http.get<IFood[]>(url, this.headers).pipe(
      mergeMap((foods: IFood[]) => {
        const foodObservables = foods.map((food: IFood) => {
          return this.pexelService.getImage(food.name).pipe(
            map((image: IImage) => {
              return this.apiToMapper.map({...food, image});
            })
          );
        });
  
        return forkJoin(foodObservables);
      })
    );
  }

  getById(foodId: number): Observable<IFood> {
    const url = URL_RESOURCES.foodWithParams(foodId);
    return this.http.get<IFood>(url, this.headers).pipe(
      map((response) => this.apiToMapper.map(response))
    );
  }

  create(food: IFood): Observable<IFood> {
    const url = URL_RESOURCES.food;
    return this.http.post<IFood>(url, food, this.toApiMapper, this.headers).pipe(
      map((response) => this.apiToMapper.map(response))
    );
  }

  update(food: IFood): Observable<IFood> {
    const url = URL_RESOURCES.foodWithParams(food.id);
    return this.http.post<IFood>(url, food, this.toApiMapper, this.headers).pipe(
      map((response) => this.apiToMapper.map(response))
    );
  }

  delete(foodId: number): Observable<IFood> {
    const url = URL_RESOURCES.foodWithParams(foodId);
    return this.http.delete<IFood>(url, this.headers).pipe(
      map((response) => this.apiToMapper.map(response))
    );
  }
}
