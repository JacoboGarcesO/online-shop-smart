import { IImage } from './image.model';

export interface IFood {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: IImage;
}
