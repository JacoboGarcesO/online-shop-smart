import { IImage } from './image.model';

export interface IFood {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  stock: number;
  image: IImage;
}
