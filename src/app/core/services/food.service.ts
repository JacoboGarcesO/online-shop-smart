import { Injectable } from '@angular/core';
import { HttpService } from './general/http.service';
import { ToApiFoodMapper } from '../mappers/to-api-food.mapper';
import { ApiToFoodMapper } from '../mappers/api-to-food.mapper';
import { Observable, map } from 'rxjs';
import { IFood } from '../models/food.model';
import { URL_RESOURCES } from '../resources/url.resources';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(
    private readonly http: HttpService,
    private readonly toApiMapper: ToApiFoodMapper,
    private readonly apiToMapper: ApiToFoodMapper
  ) { }

  getAll(): Observable<IFood[]> {
    const url = URL_RESOURCES.food;
    return this.http.get<IFood[]>(url).pipe(
      map((response) => response.map(this.apiToMapper.map))
    );
  }

  getById(foodId: number): Observable<IFood> {
    const url = URL_RESOURCES.foodWithParams(foodId);
    return this.http.get<IFood>(url).pipe(
      map((response) => this.apiToMapper.map(response))
    );
  }

  create(food: IFood): Observable<IFood> {
    const url = URL_RESOURCES.food;
    return this.http.post<IFood>(url, food, this.toApiMapper).pipe(
      map((response) => this.apiToMapper.map(response))
    );
  }

  update(food: IFood): Observable<IFood> {
    const url = URL_RESOURCES.foodWithParams(food.id);
    return this.http.post<IFood>(url, food, this.toApiMapper).pipe(
      map((response) => this.apiToMapper.map(response))
    );
  }

  delete(foodId: number): Observable<IFood> {
    const url = URL_RESOURCES.foodWithParams(foodId);
    return this.http.delete<IFood>(url).pipe(
      map((response) => this.apiToMapper.map(response))
    );
  }
}
