import { IImage } from './image.model';

export interface IFood {
  id?: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  stock: number;
  category: string;
  quantity: number;
  image?: IImage;
}

export interface IFoodCart {
  id: number;
  quantity: number;
}