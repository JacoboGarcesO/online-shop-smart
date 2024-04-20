import { Injectable } from '@angular/core';
import { IMapperIn } from '../models/mapper.model';
import { IFood } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class ApiToFoodMapper implements IMapperIn<IFood> {
  map(payload: any): IFood {
    return {
      id: payload.id,
      name: payload.name,
      description: payload.description,
      originalPrice: payload.originalPrice,
      price: payload.price,
      stock: payload.stock,
      image: {
        alt: payload.image.alt,
        id: payload.image.id,
        src: payload.image.src,
      }
    };
  }
}
