import { Injectable } from '@angular/core';
import { IMapperOut } from '../models/mapper.model';
import { IFood } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class ToApiFoodMapper implements IMapperOut<IFood> {
  map(payload: IFood) {
    return {
      id: payload.id,
      name: payload.name,
      description: payload.description,
      price: payload.price,
      stock: payload.stock
    };
  }
}
