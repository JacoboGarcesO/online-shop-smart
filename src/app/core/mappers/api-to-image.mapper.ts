import { Injectable } from '@angular/core';
import { IMapperIn } from '../models/mapper.model';
import { IImage } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ApiToImageMapper implements IMapperIn<IImage> {
  map(payload: any): IImage {
    return {
      id: payload.photos[0].id,
      src: payload.photos[0].src.original,
      alt: payload.photos[0].alt,
    };
  }
}
